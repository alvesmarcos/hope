class AuthenticateMember
  def initialize(email, password)
    @email = email
    @password = password 
  end

  def authenticate(model)
    member = member(model)
    return JsonWebToken.encode({id: member.id, email: member.email})
  end

  private

  attr_reader :email, :password

  def member(model)
    member = model.find_by(email: email)
    return member if member && member.authenticate(password)

    raise ExceptionHandler::AuthenticationError, Message.invalid_credentials
  end
end