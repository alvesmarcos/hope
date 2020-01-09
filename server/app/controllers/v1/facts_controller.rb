module V1
  class FactsController < ApplicationController
    # only role admin can post an fact
    before_action only: [:create, :update, :destroy] do
      authorize_request(:superuser)
    end
    
    before_action :set_fact, only: [:show, :update, :destroy] 
    
    # allowed => superuser, user
    # facts/
    def index
      facts = Fact.all
      json_response(facts)
    end
    
    # allowed => superuser
    # facts/ thumbnail must be upload after
    def create
      fact = Fact.new(facts_params)
      fact.created_by_id = @current_user.id
      
      if fact.save
        json_response(fact)
      else
        json_response({ message: fact.errors }, :unprocessable_entity)
      end
    end
    
    # allowed => superuser
    # destroy/:id (here you need pass which user you want delete)
    def destroy
      @fact.destroy
      head :no_content
    end
    
    # allowed => superuser, user
    # show/:id (here you need pass which user you want retreive info)
    def show
      json_response(@fact)
    end
    
    # allowed => superuser
    # update/:id (here you ne pass wich user you want update)
    def update
      @fact.update(facts_params)
      json_response(@fact)
    end
    
    private
    
    # set possible params
    def facts_params
      params.permit(:title, :text)
    end
    
    # try to find a fact before update/show/delete
    def set_fact
      @fact = Fact.find(params[:id])
    end
  end
end