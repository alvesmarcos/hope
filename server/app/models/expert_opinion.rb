class ExpertOpinion < ApplicationRecord
  # associations
  belongs_to :user

  # validations
  validates_presence_of :text
end
