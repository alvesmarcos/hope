class User < ApplicationRecord
  has_secure_password
  has_secure_password :recovery_password, validations: false

  validates :name, presence: true
  validates :email, presence: true,  uniqueness: true
  validates :profile_id, presence: true
  validates :role_id, presence: true

  belongs_to :role, :profile
  has_one :media_file
end
