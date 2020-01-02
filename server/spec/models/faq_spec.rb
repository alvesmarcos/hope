require 'rails_helper'

RSpec.describe Faq, type: :model do
  # Association test
  it { should belong_to(:superuser) }

  # Validation test
  it { should validate_presence_of(:question) }
  it { should validate_presence_of(:answer) }
end
