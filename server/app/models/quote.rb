class Quote < ApplicationRecord
  validations_presence_of :text, :author
end
