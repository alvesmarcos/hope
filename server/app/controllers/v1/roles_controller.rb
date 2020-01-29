module V1
  class RolesController < ApplicationController
    # only role admin can post a role
    before_action do
      authorize_request(:superuser, :user)
    end
      
    # allowed => superuser, user
    # roles/
    def index
      roles = Role.all
      json_response(roles)
    end
  end
end