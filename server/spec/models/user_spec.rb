require 'rails_helper'

RSpec.describe User, type: :model do
  # Association test
  it { should belong_to(:level_addiction) }
  it { should belong_to(:level_family_relationship) }

  # Validation test
  it { should validate_presence_of(:name) }
  it { should validate_presence_of(:email) }
  it { should validate_presence_of(:age) }
  it { should validate_presence_of(:level_addiction_id) }
  it { should validate_presence_of(:level_family_relationship_id) }
end
