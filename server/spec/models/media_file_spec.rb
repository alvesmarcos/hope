require 'rails_helper'

RSpec.describe MediaFile, type: :model do
  # Association test
  it { should belong_to(:user) }
end
