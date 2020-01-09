module V1
  class ThumbnailTestimoniesController < ApplicationController
    # methods allowed for both roles
    before_action do
      authorize_request(:superuser)
    end
    
    before_action :set_testimony

    # allowed => superuser
    # thumbnail_testimonies/update pass testimony id
    def update
      @testimony.thumbnail = params[:file]
      @testimony.save!
      json_response({ message: Message.media_created })
    end
    
    # allowed => superuser
    # thumbnail_testimonies/destroy
    def destroy
      @testimony.remove_thumbnail = true
      @testimony.save!
      head :no_content
    end
    
    private

    # try to find a testimony before update/show/delete
    def set_testimony
      @testimony = Testimony.find(params[:id])
    end
  end
end