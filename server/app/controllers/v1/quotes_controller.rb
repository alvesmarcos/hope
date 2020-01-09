module V1
  class QuotesController < ApplicationController
    # only role admin can post an quote
    before_action only: [:create, :update, :destroy] do
      authorize_request(:superuser)
    end
    
    before_action :set_quote, only: [:show, :update, :destroy] 
    
    # allowed => superuser, user
    # quotes/
    def index
      quotes = Quote.all
      json_response(quotes)
    end
    
    # allowed => superuser
    # quotes/ thumbnail must be upload after
    def create
      quote = Quote.new(quotes_params)
      quote.created_by_id = @current_user.id
      
      if quote.save
        json_response(quote)
      else
        json_response({ message: quote.errors }, :unprocessable_entity)
      end
    end
    
    # allowed => superuser
    # destroy/:id (here you need pass which user you want delete)
    def destroy
      @quote.destroy
      head :no_content
    end
    
    # allowed => superuser, user
    # show/:id (here you need pass which user you want retreive info)
    def show
      json_response(@quote)
    end
    
    # allowed => superuser
    # update/:id (here you ne pass wich user you want update)
    def update
      @quote.update(quotes_params)
      json_response(@quote)
    end
    
    private
    
    # set possible params
    def quotes_params
      params.permit(:author, :text)
    end
    
    # try to find a quote before update/show/delete
    def set_quote
      @quote = Quote.find(params[:id])
    end
  end
end