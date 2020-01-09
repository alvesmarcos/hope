module V1
  class TipsController < ApplicationController
    # only role admin can post an tip
    before_action only: [:create, :update, :destroy] do
      authorize_request(:superuser)
    end
    
    before_action :set_tip, only: [:show, :update, :destroy] 
    
    # allowed => superuser, user
    # tips/
    def index
      tips = Tip.all
      json_response(tips)
    end
    
    # allowed => superuser
    # tips/ thumbnail must be upload after
    def create
      tip = Tip.new(tips_params)
      tip.created_by_id = @current_user.id
      
      if tip.save
        json_response(tip)
      else
        json_response({ message: tip.errors }, :unprocessable_entity)
      end
    end
    
    # allowed => superuser
    # destroy/:id (here you need pass which user you want delete)
    def destroy
      @tip.destroy
      head :no_content
    end
    
    # allowed => superuser, user
    # show/:id (here you need pass which user you want retreive info)
    def show
      json_response(@tip)
    end
    
    # allowed => superuser
    # update/:id (here you ne pass wich user you want update)
    def update
      @tip.update(tips_params)
      json_response(@tip)
    end
    
    private
    
    # set possible params
    def tips_params
      params.permit(:title, :text)
    end
    
    # try to find a tip before update/show/delete
    def set_tip
      @tip = Tip.find(params[:id])
    end
  end
end