class AuthorizeApiRequestService
  def initialize(headers = {})
    @headers = headers
  end

  def authorize(*roles)
    user(*roles)
  end

  private

  attr_reader :headers

  def user(*roles)
    user = User.find(decoded_auth_token[:user_id]) if decoded_auth_token

    roles.each do |role|
      record = Role.find_by!(slug: role)
      return user if record.id == user.role_id
    end
    
    raise ExceptionHandler::Forbidden, Message.forbidden

    rescue ActiveRecord::RecordNotFound => e
      raise ExceptionHandler::InvalidToken, "#{Message.invalid_token} #{e.message}"
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