module Api
  module V1
    class SessionsController < ApplicationController
      def auth_superuser
        auth_token = AuthenticateMember.new(auth_params[:email], auth_params[:password])
          .authenticate(Superuser)
        json_response(token: auth_token)
      end

      private

      def auth_params
        params.permit(:email, :password)
      end
    end
  end
end