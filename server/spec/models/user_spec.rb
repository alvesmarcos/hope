require 'rails_helper'

RSpec.describe User, type: :model do
  # Association test
  it { should belong_to(:profile) }
  it { should belong_to(:role) }
  it { should have_one(:avatar) }

  # Validation test
  it { should validate_presence_of(:name) }
  it { should validate_presence_of(:email) }
  it { should validate_presence_of(:profile_id) }
  it { should validate_presence_of(:role_id) }
end
