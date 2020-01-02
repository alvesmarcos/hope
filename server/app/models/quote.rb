class Quote < ApplicationRecord
  # associations
  belongs_to :superuser, foreign_key: 'created_by'

  # validations
  validates_presence_of :text, :author
end
