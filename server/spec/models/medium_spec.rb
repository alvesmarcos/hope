require 'rails_helper'

RSpec.describe Medium, type: :model do
  # Association test
  it { should belong_to(:expert) }
  it { should belong_to(:user) }
  it { should belong_to(:superuser) }
end
