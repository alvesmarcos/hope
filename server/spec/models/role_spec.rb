require 'rails_helper'

RSpec.describe Role, type: :model do
  # Validation test
  it { should validate_presence_of(:name) }
  it { should validate_presence_of(:slug) }
end
