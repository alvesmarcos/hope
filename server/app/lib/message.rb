class Message
  def self.not_found(record = 'record')
    "Sorry, #{record} not found"
  end

  def self.invalid_credentials
    'Invalid credentials'
  end

  def self.invalid_token
    'Invalid token'
  end

  def self.missing_token
    'Missing token'
  end

  def self.unauthorized
    'Unauthorized request'
  end

  def self.account_created
    'Account created successfully'
  end

  def self.recovery_email_sent
    'We sent an email for recovery password. Please check your email inbox.'
  end

  def self.recovery_token_invalid
    'Token not valid or expired. Try generating a new token'
  end

  def self.recovery_password_succeed
    'Your password was successfully updated, you can sign in with your new password.'
  end

  def self.media_created
    'Media created successfully'
  end

  def self.account_not_created
    'Account could not be created'
  end

  def self.forbidden
    'Sorry, you do not have permission to access the route you requested.'
  end
  
  def self.expired_token
    'Sorry, your token has expired. Please sign in to continue.'
  end
end