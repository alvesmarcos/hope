class AuthorizeApiRequest
  def initialize(headers = {})
    @headers = headers
  end

  def authorize(*models)
    group(*models)
  end

  private

  attr_reader :headers

  def group(*models)
    email = decoded_auth_token[:email] if decoded_auth_token

    models.each do |model|
      member = model.find_by(email: email)
      next if member.nil?
      return member
    end
    raise ExceptionHandler::Forbidden, Message.forbidden
  end

  def decoded_auth_token
    @decoded_auth_token ||= JsonWebToken.decode(http_auth_header)
  end

  def http_auth_header
    if headers['Authorization'].present?
      return headers['Authorization'].split(' ').last
    end
    raise ExceptionHandler::MissingToken, Message.missing_token
  end
end