class Avatar < ApplicationRecord
  # model associations
  belongs_to :user
  belongs_to :media_file

  # validations
  validates_presence_of :user_id, :media_file_id
end
