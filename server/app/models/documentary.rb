class Documentary < ApplicationRecord
  # storage Amazon S3
  mount_uploader :thumbnail, ThumbnailUploader

  # associations
  belongs_to :created_by, class_name: 'User', foreign_key: 'created_by_id'
   
  # validations
  validates_presence_of :title, :description, :url
end
