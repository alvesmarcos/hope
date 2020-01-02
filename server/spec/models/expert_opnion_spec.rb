require 'rails_helper'

RSpec.describe ExpertOpnion, type: :model do
  # Association test
  it { should belong_to(:expert) }

  # Validation test
  it { should validate_presence_of(:text) }
end
