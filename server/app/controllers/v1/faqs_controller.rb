module V1
  class FaqsController < ApplicationController
    # only role admin can post an faq
    before_action only: [:create, :update, :destroy] do
      authorize_request(:superuser)
    end
    
    before_action :set_faq, only: [:show, :update, :destroy] 
    
    # allowed => superuser, user
    # faqs/
    def index
      faqs = Faq.all
      json_response(faqs)
    end
    
    # allowed => superuser
    # faqs/ thumbnail must be upload after
    def create
      faq = Faq.new(faqs_params)
      faq.created_by_id = @current_user.id
      
      if faq.save
        json_response(faq)
      else
        json_response({ message: faq.errors }, :unprocessable_entity)
      end
    end
    
    # allowed => superuser
    # destroy/:id (here you need pass which user you want delete)
    def destroy
      @faq.destroy
      head :no_content
    end
    
    # allowed => superuser, user
    # show/:id (here you need pass which user you want retreive info)
    def show
      json_response(@faq)
    end
    
    # allowed => superuser
    # update/:id (here you ne pass wich user you want update)
    def update
      @faq.update(faqs_params)
      json_response(@faq)
    end
    
    private
    
    # set possible params
    def faqs_params
      params.permit(:question, :answer)
    end
    
    # try to find a faq before update/show/delete
    def set_faq
      @faq = Faq.find(params[:id])
    end
  end
end