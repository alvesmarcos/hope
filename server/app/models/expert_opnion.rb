class ExpertOpnion < ApplicationRecord
  # associations
  belongs_to :expert

  # validations
  validates_presence_of :text
end
