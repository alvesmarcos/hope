class Superuser < ApplicationRecord
   # encrypt password
   has_secure_password
   
   # validations
   validates :name, presence: true
   validates :email, uniqueness: true
end
