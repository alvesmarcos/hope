class AuthenticateSuperuser
  def initialize(email, password)
    @email = email
    @password = password 
  end

  def call
    JsonWebToken.encode(superuser_id: superuser.id) if superuser
  end

  private

  attr_reader :email, :password

  def superuser
    superuser = Superuser.find_by(email: email)
    return superuser if superuser && superuser.authenticate(password)

    raise ExceptionHandler::AuthenticationError, Message.invalid_credentials
  end
end