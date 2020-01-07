class Documentary < ApplicationRecord
  # storage Amazon S3
  mount_uploader :thumbnail, ThumbnailUploader

  # associations
  belongs_to :user, foreign_key: 'created_by'
   
  # validations
  validates_presence_of :title, :description, :url
end
