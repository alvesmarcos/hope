class User < ApplicationRecord
  # encrypt password
  has_secure_password

  # storage Amazon S3
  mount_uploader :avatar, AvatarUploader
   
  # associations
  belongs_to :profile
  belongs_to :role

  # validations
  validates_presence_of :name, :email, :username, :profile_id, :role_id
  validates_uniqueness_of :email, :username

  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :name, length: { minimum: 2 }
  validates :username, length: { minimum: 2 }

  # helpers methods

  # create token for password and store in table users
  def generate_password_token!
    self.reset_password_token = generate_token
    self.reset_password_sent_at = Time.now.utc
    save!
   end
   
  # after one two you have to request a new token
   def password_token_valid?
    (self.reset_password_sent_at + 2.hours) > Time.now.utc
   end
   
   private
   
   def generate_token
    SecureRandom.hex(10)
   end
end
