class MediaCategory < ApplicationRecord
 # validations
 validations_presence_of :name, :description, :slug
end
