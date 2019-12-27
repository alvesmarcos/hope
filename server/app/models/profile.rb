class Profile < ApplicationRecord
  # validations
  validates_presence_of :name, :slug
end
