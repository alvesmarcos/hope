module V1
  class AvatarsController < ApplicationController
    # methods allowed for both roles
    before_action only: [:create] do
      authorize_request(:superuser, :user)
    end

    # allowed => superuser, user
    # avatar/ (get user id from current_user logged)
    def create
      user = User.find(@current_user.id)
      user.avatar = params[:file]
      user.save!
      json_response({ message: "Avatar created successfully for user #{user.name}" })
    end
  end
end