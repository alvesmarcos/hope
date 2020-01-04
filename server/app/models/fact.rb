class Fact < ApplicationRecord
  # associations
  belongs_to :user, foreign_key: 'created_by'

  # validations
  validates_presence_of :title, :text
end
