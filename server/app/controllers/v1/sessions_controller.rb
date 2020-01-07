module V1
  class SessionsController < ApplicationController
    # allowed => public
    # sessions/:id
    def create
      token = AuthenticateUserService.new(auth_params[:email], auth_params[:password])
      .call
      json_response(token: token)
    end
    
    private
    
    def auth_params
      params.permit(:email, :password)
    end
  end
end
