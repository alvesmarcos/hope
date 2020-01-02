class Expert < ApplicationRecord
  # associations
  belongs_to :profession
  belongs_to :status

  # validations
  validations_presence_of :name, :email, :profession_id
  validations_uniqueness_of :email
end
