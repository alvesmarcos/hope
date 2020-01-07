module V1
  class PasswordsController < ApplicationController
    # allowed => public
    # forgot_password/ (send a email)
    def forgot
      email = params.require(:email)
      user = User.find_by!(email: email)
      user.generate_password_token!
      # send email using recovery template
      UserMailer.recovery_email(user).deliver_now
      json_response({ message: 'We sent an email for recovery password. Please check your email inbox.' })
    end
    
    # allowed => public
    # reset_password/
    def reset
      email, token = params.require(:email), params.require(:token)
      password, password_confirmation = params.require(:password), params.require(:password_confirmation)
      
      user = User.find_by!(email: email)
      
      if user.reset_password_token == token and user.password_token_valid?
        user.password = password
        user.password_confirmation = password_confirmation
        user.save!
        json_response({ message: 'Your password was successfully updated, you can sign in with your new password.'})
      else
        json_response({ message: 'Token not valid or expired. Try generating a new token' }, :not_found)
      end
    end
  end
end
