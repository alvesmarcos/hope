class Medium < ApplicationRecord
  # associations
  belongs_to :media_category
  belongs_to :user, foreign_key: 'user_owner'
end
