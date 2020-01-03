class AuthorizeApiRequest
  def initialize(headers = {})
    @headers = headers
  end

  def call
    {
      superuser: superuser
    }
  end

  private

  attr_reader :headers

  def superuser
    @superuser ||= Superuser.find(decode_auth_token[:superuser_id]) if decoded_auth_token
  end

  def decode_auth_token
    @decoded_auth_token ||= JsonWebToken.decode(http_auth_header)
  end

  def http_auth_header
    if headers['Authorization'].present?
      return headers['Authorization'].split(' ').last
    end
    raise ExceptionHandler::MissingToken, Message.missing_token
  end
end