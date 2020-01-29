class CreateVerifyEmails < ActiveRecord::Migration[6.0]
  def change
    create_table :verify_emails do |t|
      t.string :email, null: false
  
      t.timestamps
    end
  end
end
