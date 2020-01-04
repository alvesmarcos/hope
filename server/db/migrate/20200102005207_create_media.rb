class CreateMedia < ActiveRecord::Migration[6.0]
  def change
    create_table :media do |t|
      t.string :name, null: false
      t.string :path, null: false
      t.string :mime_type, null: false
      t.references :media_category, null: false, foreign_key: true
      t.references :user_owner, foreign_key: { to_table: :users }
      
      t.timestamps
    end
  end
end
