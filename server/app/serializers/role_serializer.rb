class RoleSerializer < ActiveModel::Serializer
  # attributes to be serialized
  attributes :id, :name, :slug, :description
end
