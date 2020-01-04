class Documentary < ApplicationRecord
  # associations
  belongs_to :media
  belongs_to :user, foreign_key: 'created_by'
   
  # validations
  validates_presence_of :title, :description, :media_id, :url
end
