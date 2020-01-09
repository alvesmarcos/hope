module V1
  class ThumbnailArticlesController < ApplicationController
    # methods allowed for both roles
    before_action do
      authorize_request(:superuser)
    end
    
    before_action :set_article

    # allowed => superuser
    # thumbnail_articles/update pass article id
    def update
      @article.thumbnail = params[:file]
      @article.save!
      json_response({ message: "Thumbnail created successfully for article '#{@article.title}'" })
    end
    
    # allowed => superuser
    # thumbnail_articles/destroy
    def destroy
      @article.remove_thumbnail = true
      @article.save!
      head :no_content
    end
    
    private

    # try to find a article before update/show/delete
    def set_article
      @article = Article.find(params[:id])
    end
  end
end