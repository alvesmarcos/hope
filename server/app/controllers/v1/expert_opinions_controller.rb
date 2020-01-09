module V1
  class ExpertOpinionsController < ApplicationController
    # only role admin can post an expert_opinion
    before_action only: [:create, :update, :destroy] do
      authorize_request(:superuser)
    end
    
    before_action :set_expert_opinion, only: [:show, :update, :destroy] 
    
    # allowed => superuser, user
    # expert_opinions/
    def index
      expert_opinions = ExpertOpinion.all
      json_response(expert_opinions)
    end
    
    # allowed => superuser
    # expert_opinions/ thumbnail must be upload after
    def create
      expert_opinion = ExpertOpinion.new(expert_opinions_params)
      expert_opinion.created_by_id = @current_user.id
      
      if expert_opinion.save
        json_response(expert_opinion)
      else
        json_response({ message: expert_opinion.errors }, :unprocessable_entity)
      end
    end
    
    # allowed => superuser
    # destroy/:id (here you need pass which user you want delete)
    def destroy
      @expert_opinion.destroy
      head :no_content
    end
    
    # allowed => superuser, user
    # show/:id (here you need pass which user you want retreive info)
    def show
      json_response(@expert_opinion)
    end
    
    # allowed => superuser
    # update/:id (here you ne pass wich user you want update)
    def update
      @expert_opinion.update(expert_opinions_params)
      json_response(@expert_opinion)
    end
    
    private
    
    # set possible params
    def expert_opinions_params
      params.permit(:text)
    end
    
    # try to find a expert_opinion before update/show/delete
    def set_expert_opinion
      @expert_opinion = ExpertOpinion.find(params[:id])
    end
  end
end