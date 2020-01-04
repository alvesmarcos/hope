class User < ApplicationRecord
  # encrypt password
  has_secure_password
   
  # associations
  belongs_to :level_addiction
  belongs_to :level_family_relationship

  # validations
  validates_presence_of :name, :email, :age, :level_addiction_id, :level_family_relationship_id
  validates_uniqueness_of :email
end
