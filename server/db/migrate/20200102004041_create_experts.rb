class CreateExperts < ActiveRecord::Migration[6.0]
  def change
    create_table :experts do |t|
      t.string :name, null: false
      t.string :password_digest, null: false
      t.string :email, null: false
      t.references :profession, null: false, foreign_key: true
      t.references :status, null: false, foreign_key: true
      t.boolean :actived, default: true

      t.timestamps

      t.index :email, unique: false
    end
  end
end
