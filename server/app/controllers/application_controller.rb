class ApplicationController < ActionController::API
  include Response
  include ExceptionHandler
  
  attr_reader :current_member

  private

  def authorize_request(*roles)
    @current_user = AuthorizeApiRequestService.new(request.headers)
      .authorize(*roles)
  end
end
