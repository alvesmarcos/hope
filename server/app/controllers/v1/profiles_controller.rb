module V1
  class ProfilesController < ApplicationController
    # only profile admin can post a profile
    before_action do
      authorize_request(:superuser, :user)
    end
      
    # allowed => superuser, user
    # profiles/
    def index
      profiles = Profile.all
      json_response(profiles)
    end
  end
end