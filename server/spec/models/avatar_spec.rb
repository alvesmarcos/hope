require 'rails_helper'

RSpec.describe Avatar, type: :model do
  # Association test
  it { should belong_to(:user) }  
  it { should belong_to(:media_file) }

  # Validation test
  it { should validate_presence_of(:user_id) }
  it { should validate_presence_of(:media_file_id) }
end
