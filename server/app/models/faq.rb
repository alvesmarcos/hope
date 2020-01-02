class Faq < ApplicationRecord
  # associations
  belongs_to :superuser, foreign_key: 'created_by'

  # validations
  validates_presence_of :question, :answer
end
