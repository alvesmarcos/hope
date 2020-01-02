require 'rails_helper'

RSpec.describe MediaCategory, type: :model do
  it { should validate_presence_of(:name) }
  it { should validate_presence_of(:description) }
  it { should validate_presence_of(:slug) }
end
