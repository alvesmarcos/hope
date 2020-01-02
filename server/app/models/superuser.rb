class Superuser < ApplicationRecord
   # encrypt password
   has_secure_password
   
   # validations
   validations_presence_of :name, :email
   validations_uniqueness_of :email
end
