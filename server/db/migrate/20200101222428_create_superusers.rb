class CreateSuperusers < ActiveRecord::Migration[6.0]
  def change
    create_table :superusers do |t|
      t.string :name, null: false
      t.string :password_digest, null: false
      t.string :email, null: false
      t.boolean :actived, default: true

      t.timestamps

      t.index :email, unique: false
    end
  end
end
