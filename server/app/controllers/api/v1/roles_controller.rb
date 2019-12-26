module Api
  module V1
    class RolesController < ApplicationController
      def index
        roles = Role.all
        render :json => roles
      end

      def show
        role = Role.find(params[:id])
        render :json => role
      end
    end
  end
end