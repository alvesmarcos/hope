class UserSerializer < ActiveModel::Serializer
  # attributes to be serialized
  attributes :id, :name, :username, :email, :avatar, :created_at, :updated_at
  # model associations
  belongs_to :profile
  belongs_to :role
  has_many :articles, foreign_key: :created_by_id
  has_many :facts, foreign_key: :created_by_id
end
