module V1
  class ArticlesController < ApplicationController
    # only role admin can post an article
    before_action only: [:create, :update, :destroy] do
      authorize_request(:superuser)
    end

    before_action :set_article, only: [:show, :update, :destroy] 

    # allowed => superuser, user
    # articles/
    def index
      articles = Article.all
      json_response(articles)
    end
    
    # allowed => superuser
    # articles/ thumbnail must be upload after
    def create
      article = Article.new(articles_params)
      article.created_by_id = @current_user.id

      if article.save
        json_response(article)
      else
        json_response({ message: article.errors }, :unprocessable_entity)
      end
    end

    # allowed => superuser
    # destroy/:id (here you need pass which user you want delete)
    def destroy
      @article.destroy
      head :no_content
    end
    
    # allowed => superuser, user
    # show/:id (here you need pass which user you want retreive info)
    def show
      json_response(@article)
    end
    
    # allowed => superuser
    # update/:id (here you ne pass wich user you want update)
    def update
      @article.update(articles_params)
      json_response(@article)
    end

    private

    # set possible params
    def articles_params
      params.permit(:title, :url)
    end

    # try to find a article before update/show/delete
    def set_article
      @article = Article.find(params[:id])
    end
  end
end