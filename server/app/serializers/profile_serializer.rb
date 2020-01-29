class ProfileSerializer < ActiveModel::Serializer
  # attributes to be serialized
  attributes :id, :name, :slug, :description
end
