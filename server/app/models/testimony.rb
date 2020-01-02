class Testimony < ApplicationRecord
  # associations
  belongs_to :media
  belongs_to :superuser, foreign_key: 'created_by'
  
  # validations
  validates_presence_of :title, :text, :media_id
end
