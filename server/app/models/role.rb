class Role < ApplicationRecord
  # validations
  validates_presence_of :name, :slug
end