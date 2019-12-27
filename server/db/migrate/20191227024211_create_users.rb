class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :name, null: false
      t.string :email, null: false
      t.string :password_digest, null: false
      t.string :recovery_password_digest
      t.references :profile, foreign_key: true, null: false
      t.references :role, foreign_key: true, null: false
      
      t.timestamps
      
      t.index :email, unique: true
    end
  end
end
