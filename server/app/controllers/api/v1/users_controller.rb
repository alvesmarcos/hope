module Api
  module V1
    class UsersController < ApplicationController
      # methods only allowed for superusers
      before_action only: [:index, :show, :destroy, :update] do
        authorize_request(:superuser)
      end

      # methods allowed for both roles
      before_action only: [:self_show, :self_destroy, :self_update] do
        authorize_request(:superuser, :user)
      end

      before_action :set_user, only: [:show, :update, :destroy] 

      # allowed => superuser
      # users/
      def index
        users = User.all
        json_response(users)
      end

      # allowed => superuser, user
      # signup/ (everyone can create a user will be change more further)
      def create
        user = User.new(user_params)
        if user.save
          auth_token = AuthenticateUser.new(user.email, user.password)
            .authenticate
          # send email using welcome template
          UserMailer.welcome_email(user).deliver_now
          response = { message: Message.account_created, token: auth_token }
          json_response(response, :created)
        else
          json_response(user.errors, :unprocessable_entity)
        end
      end
      
      # allowed => superuser
      # destroy/:id (here you need pass which user you want delete)
      def destroy
        @user.destroy
        head :no_content
      end

      # allowed => superuser
      # show/:id (here you need pass which user you want retreive info)
      def show
        json_response(@user)
      end

      # allowed => superuser
      # update/:id (here you ne pass wich user you want update)
      def update
        @user.update(user_params_update)
        json_response(@user)
      end

      # allowed => superuser, user
      # destroy/ (dont need a ID because here it's catch the current_user)
      def self_destroy
        @current_user.destroy
        head :no_content
      end

      # allowed => superuser, user
      # show/ (dont need a ID because here it's catch the current_user)
      def self_show
        json_response(@current_user)
      end

      # allowed => superuser, user
      # update/ (dont need a ID because here it's catch the current_user)
      def self_update
        @current_user.update(user_params_update)
        json_response(@current_user)
      end

      private
      
      # users params that should be used to create a new user
      def user_params
        params.permit(
          :name,
          :email,
          :username,
          :profile_id,
          :role_id,
          :password,
          :password_confirmation
        )
      end

      # users params that should be used to update an user
      # more further the User may update other fields
      def user_params_update
        params.permit(:name, :profile_id)
      end

      # set user for show, update and destroy
      def set_user
        @user = User.find(params[:id])
      end
    end
  end
end