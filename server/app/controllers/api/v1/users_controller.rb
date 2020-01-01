module Api
  module V1
    class UsersController < ApplicationController
      def index
        users = User.all
        json_response(wrapper(users))
      end

      def show
        user = User.find(params[:id])
        json_response(wrapper(user))
      end

      def create
        user = User.new(user_params)

        if user.save
          json_response(wrapper(user), :created)
        else
          json_response(user.errors, :bad_request)
        end
      end

      def destroy
        user = User.find(params[:id])
        user.destroy
        head :no_content
      end

      def user_params
        params.permit(:name, :email, :password, :password_confirmation, :profile_id, :role_id, :media_file_id)
      end
    
      def wrapper(user)
        user.to_json(include: [:profile, :role], except: [:password_digest, :recovery_password_digest])
      end
      
      private :user_params, :wrapper

    end
  end
end