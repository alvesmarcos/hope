module V1
  class TestimoniesController < ApplicationController
    # only role admin can post an testimony
    before_action only: [:create, :update, :destroy] do
      authorize_request(:superuser)
    end

    before_action :set_testimony, only: [:show, :update, :destroy] 

    # allowed => superuser, user
    # testimonies/
    def index
      testimonies = Testimony.all
      json_response(testimonies)
    end
    
    # allowed => superuser
    # testimonies/ thumbnail must be upload after
    def create
      testimony = Testimony.new(testimonies_params)
      testimony.created_by_id = @current_user.id

      if testimony.save
        json_response(testimony)
      else
        json_response({ message: testimony.errors }, :unprocessable_entity)
      end
    end

    # allowed => superuser
    # destroy/:id (here you need pass which user you want delete)
    def destroy
      @testimony.destroy
      head :no_content
    end
    
    # allowed => superuser, user
    # show/:id (here you need pass which user you want retreive info)
    def show
      json_response(@testimony)
    end
    
    # allowed => superuser
    # update/:id (here you ne pass wich user you want update)
    def update
      @testimony.update(testimonies_params)
      json_response(@testimony)
    end

    private

    # set possible params
    def testimonies_params
      params.permit(:title, :text, :url)
    end

    # try to find a testimony before update/show/delete
    def set_testimony
      @testimony = Testimony.find(params[:id])
    end
  end
end