class MediaFile < ApplicationRecord
  # model associations
  belongs_to :user, foreign_key: 'created_by_id'
end