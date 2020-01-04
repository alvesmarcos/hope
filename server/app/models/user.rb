class User < ApplicationRecord
  # encrypt password
  has_secure_password
   
  # associations
  belongs_to :profile
  belongs_to :role

  # validations
  validates_presence_of :name, :email, :username, :profile_id, :role_id
  validates_uniqueness_of :email, :username

  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :name, length: { minimum: 2 }
  validates :username, length: { minimum: 2 }
end
