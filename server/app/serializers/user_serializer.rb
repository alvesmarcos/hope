class UserSerializer < ActiveModel::Serializer
  # attributes to be serialized
  attributes :id, :name, :email, :avatar, :role, :profile, :created_at, :updated_at
  # model associations
  belongs_to :profile
  belongs_to :role
end
