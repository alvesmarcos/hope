class Superuser < ApplicationRecord
   # encrypt password
   has_secure_password
   
   # validations
   validates_presence_of :name, :email
   validates_uniqueness_of :email
end
