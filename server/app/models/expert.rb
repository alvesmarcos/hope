class Expert < ApplicationRecord
  # associations
  belongs_to :profession
  belongs_to :status

  # validations
  validates_presence_of :name, :email, :profession_id
  validates_uniqueness_of :email
end
