class Expert < ApplicationRecord
  # encrypt password
  has_secure_password
   
  # associations
  belongs_to :profession
  belongs_to :status

  # validations
  validates_presence_of :name, :email, :profession_id
  validates_uniqueness_of :email
end
