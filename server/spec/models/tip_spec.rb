require 'rails_helper'

RSpec.describe Tip, type: :model do
  it { should validate_presence_of(:title) }
  it { should validate_presence_of(:text) }
end
