class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :name, null: false
      t.string :password_digest, null: false
      t.string :email, null: false
      t.string :age, null: false
      t.references :level_addiction, null: false, foreign_key: true
      t.references :level_family_relationship, null: false, foreign_key: true
      t.boolean :actived, default: true

      t.timestamps

      t.index :email, unique: false
    end
  end
end
