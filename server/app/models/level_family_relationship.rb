class LevelFamilyRelationship < ApplicationRecord
  # validations
  validates_presence_of :name, :description, :slug
end
