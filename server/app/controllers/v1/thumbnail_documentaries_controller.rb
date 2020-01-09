module V1
  class ThumbnailDocumentariesController < ApplicationController
    # methods allowed for both roles
    before_action do
      authorize_request(:superuser)
    end
    
    before_action :set_documentary

    # allowed => superuser
    # thumbnail_documentaries/update pass documentary id
    def update
      @documentary.thumbnail = params[:file]
      @documentary.save!
      json_response({ message: Message.media_created })
    end
    
    # allowed => superuser
    # thumbnail_documentaries/destroy
    def destroy
      @documentary.remove_thumbnail = true
      @documentary.save!
      head :no_content
    end
    
    private

    # try to find a documentary before update/show/delete
    def set_documentary
      @documentary = Documentary.find(params[:id])
    end
  end
end