module Api
  module V1
    class UsersController < ApplicationController
      def create
        user = User.new(user_params)
        if user.save
          auth_token = AuthenticateUser.new(user.email, user.password)
            .authenticate
          response = { message: Message.account_created, token: auth_token }
          json_response(response, :created)
        else
          json_response(user.errors, :unprocessable_entity)
        end
      end
    
      private
    
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
    end
  end
end