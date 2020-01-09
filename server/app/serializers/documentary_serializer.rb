class DocumentarySerializer < ActiveModel::Serializer
  # attributes to be serialized
  attributes :id, :title, :description, :url, :thumbnail
  # model associations
  belongs_to :created_by, class_name: 'User', foreign_key: :created_by_id
end
