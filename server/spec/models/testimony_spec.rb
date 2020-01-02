require 'rails_helper'

RSpec.describe Testimony, type: :model do
  # Association test
  it { should belong_to(:superuser) }

  # Validation test
  it { should validate_presence_of(:title) }
  it { should validate_presence_of(:text) }
  it { should validate_presence_of(:media_id) }
end
