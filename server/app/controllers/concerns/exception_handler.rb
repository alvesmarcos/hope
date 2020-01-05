module ExceptionHandler
  extend ActiveSupport::Concern

  class AuthenticationError < StandardError; end
  class MissingToken < StandardError; end
  class Forbidden < StandardError; end
  class InvalidToken < StandardError; end

  included do
    rescue_from ActiveRecord::RecordInvalid, with: :unprocessable_request
    rescue_from ActionController::ParameterMissing, with: :_bad_request
    rescue_from ActiveRecord::RecordNotFound, with: :not_found_request
    rescue_from ExceptionHandler::AuthenticationError, with: :unauthorized_request
    rescue_from ExceptionHandler::Forbidden, with: :forbidden_request
    rescue_from ExceptionHandler::MissingToken, with: :unprocessable_request
    rescue_from ExceptionHandler::InvalidToken, with: :unprocessable_request
  end

  private

  def forbidden_request(e)
    json_response({ message: e.message }, :forbidden)
  end

  def not_found_request(e)
    json_response({ message: e.message }, :not_found)
  end

  def unprocessable_request(e)
    json_response({ message: e.message }, :unprocessable_entity)
  end

  def unauthorized_request(e)
    json_response({ message: e.message }, :unauthorized)
  end

  def _bad_request(e)
    json_response({ message: e.message }, :bad_request)
  end
end