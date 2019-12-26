module Api
  module V1
    class ProfilesController < ApplicationController
      def index
        profiles = Profile.all
        render :json => profiles
      end
    
      def show
        profile = Profile.find(params[:id])
        render :json => profile
      end
    end
  end
end