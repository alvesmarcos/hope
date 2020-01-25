module V1
  class VerifyEmailsController < ApplicationController
    # only role admin can post a role
    before_action only: [:index] do
     authorize_request(:superuser)
    end
      
    # allowed => superuser
    # verify_email/
    def index
      verify_email = VerifyEmail.all
      json_response(verify_email)
    end

    # allowed => superuser, user
    # verify_email/
    def create
      verify_email = VerifyEmail.new(verify_params)

      if verify_email.save
        user = User.find_by(email: verify_email.email)
      
        response = user.nil? ? 
          { message: Message.available_email(verify_email.email), available: true }
          : 
          { message: Message.unavailable_email(verify_email.email), available: false } 
        json_response(response, :created)
      else
        json_response({ message: verify_email.errors }, :unprocessable_entity)
      end
    end

    private
    
    # set possible params
    def verify_params
      params.permit(:email)
    end
  end
end