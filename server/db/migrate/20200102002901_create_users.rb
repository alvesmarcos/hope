class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :name, null: false
      t.string :password_digest, null: false
      t.string :reset_password_token
      t.datetime :reset_password_sent_at
      t.string :email, null: false
      t.string :avatar
      t.references :profile, foreign_key: true, null: false
      t.references :role, foreign_key: true, null: false
      
      t.timestamps

      t.index :email, unique: false
    end
  end
end
