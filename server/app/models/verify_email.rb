class VerifyEmail < ApplicationRecord
  # validations
  validates_presence_of :email
end
