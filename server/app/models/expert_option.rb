class ExpertOption < ApplicationRecord
  # associations
  belongs_to :expert

  # validations
  validations_presence_of :text
end
