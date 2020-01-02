require 'rails_helper'

RSpec.describe Documentary, type: :model do
  # Association test
  it { should belong_to(:media) }
  it { should belong_to(:superuser) }

  # Validation test
  it { should validate_presence_of(:title) }
  it { should validate_presence_of(:description) }
  it { should validate_presence_of(:media_id) }
  it { should validate_presence_of(:url) }
end
