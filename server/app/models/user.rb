class User < ApplicationRecord
  # encrypt password
  has_secure_password
   
  # associations
  belongs_to :profile
  belongs_to :role

  # validations
  validates_presence_of :name, :email, :username, :profile_id, :role_id
  validates_uniqueness_of :email, :username
end
