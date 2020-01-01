require 'rails_helper'

RSpec.describe Profession, type: :model do
  # validation test
  it { should validate_presence_of(:name) }
  it { should validate_presence_of(:code) }
end
