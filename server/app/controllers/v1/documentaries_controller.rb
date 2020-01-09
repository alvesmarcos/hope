module V1
  class DocumentariesController < ApplicationController
    # only role admin can post an documentary
    before_action only: [:create, :update, :destroy] do
      authorize_request(:superuser)
    end

    before_action :set_documentary, only: [:show, :update, :destroy] 

    # allowed => superuser, user
    # documentaries/
    def index
      documentaries = Documentary.all
      json_response(documentaries)
    end
    
    # allowed => superuser
    # documentaries/ thumbnail must be upload after
    def create
      documentary = Documentary.new(documentaries_params)
      documentary.created_by_id = @current_user.id

      if documentary.save
        json_response(documentary)
      else
        json_response({ message: documentary.errors }, :unprocessable_entity)
      end
    end

    # allowed => superuser
    # destroy/:id (here you need pass which user you want delete)
    def destroy
      @documentary.destroy
      head :no_content
    end
    
    # allowed => superuser, user
    # show/:id (here you need pass which user you want retreive info)
    def show
      json_response(@documentary)
    end
    
    # allowed => superuser
    # update/:id (here you ne pass wich user you want update)
    def update
      @documentary.update(documentaries_params)
      json_response(@documentary)
    end

    private

    # set possible params
    def documentaries_params
      params.permit(:title, :description, :url)
    end

    # try to find a documentary before update/show/delete
    def set_documentary
      @documentary = Documentary.find(params[:id])
    end
  end
end