module Api
  module V1
    class SessionsController < ApplicationController
      def create
        token = AuthenticateUser.new(auth_params[:email], auth_params[:password])
          .authenticate
        json_response(token: token)
      end
    
      private

      def auth_params
        params.permit(:email, :password)
      end
    end
  end
end