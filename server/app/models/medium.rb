class Medium < ApplicationRecord
  # associations
  belongs_to :media_category
  belongs_to :expert, foreign_key: 'expert_owner'
  belongs_to :user, foreign_key: 'user_owner'
  belongs_to :superuser, foreign_key: 'superuser_owner'
end
