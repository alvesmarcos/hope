class User < ApplicationRecord
    # encrypt password
    has_secure_password
    has_secure_password :recovery_password, validations: false
    
    # model associations
    belongs_to :role
    belongs_to :profile
    has_one :avatar

    # validations
    validates :name, presence: true
    validates :email, presence: true,  uniqueness: true
    validates :profile_id, presence: true
    validates :role_id, presence: true
end
