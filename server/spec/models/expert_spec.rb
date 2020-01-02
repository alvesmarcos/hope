require 'rails_helper'

RSpec.describe Expert, type: :model do
  # Association test
  it { should belong_to(:profession) }
  it { should belong_to(:status) }

  # Validation test
  it { should validate_presence_of(:name) }
  it { should validate_presence_of(:email) }
  it { should validate_presence_of(:profession_id) }
end
