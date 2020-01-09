class ExpertOpinion < ApplicationRecord
  # associations
  belongs_to :created_by, class_name: 'User', foreign_key: 'created_by_id'
  
  # validations
  validates_presence_of :text
end
