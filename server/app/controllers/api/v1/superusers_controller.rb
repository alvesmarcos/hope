module Api
  module V1
    class SuperusersController < ApplicationController
      def create
        user = Superuser.create!(user_params)
        auth_token = AuthenticateMember.new(user.email, user.password)
          .authenticate(Superuser)
        response = { message: Message.account_created, token: auth_token }
        json_response(response, :created)
      end
    
      private
    
      def user_params
        params.permit(
          :name,
          :email,
          :password,
          :password_confirmation
        )
      end
    end
  end
end