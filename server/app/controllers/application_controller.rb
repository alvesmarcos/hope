class ApplicationController < ActionController::API
  include Response
  include ExceptionHandler
    
  attr_reader :current_member

  private

  def authorize_request(*models)
    @current_member = AuthorizeApiRequest.new(request.headers)
      .authorize(*models)
  end
end
