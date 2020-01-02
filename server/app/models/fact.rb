class Fact < ApplicationRecord
  # validations
  validations_presence_of :title, :text
end
