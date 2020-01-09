module V1
  class AvatarsController < ApplicationController
    # methods allowed for both roles
    before_action do
      authorize_request(:superuser, :user)
    end

    # allowed => superuser, user
    # avatars/ (get user id from current_user logged)
    def update
      @current_user.avatar = params[:file]
      @current_user.save!
      json_response({ message: Message.media_created })
    end

    # allowed => superuser, user
    def destroy
      @current_user.remove_avatar = true
      @current_user.save!
      head :no_content
    end
  end
end