class Profession < ApplicationRecord
  # validations
  validates_presence_of :name, :code
end
