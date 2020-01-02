class CreateMedia < ActiveRecord::Migration[6.0]
  def change
    create_table :media do |t|
      t.string :name, null: false
      t.string :path, null: false
      t.string :mime_type, null: false
      t.references :media_category, null: false, foreign_key: true
      t.references :expert_owner, foreign_key: { to_table: :experts }
      t.references :user_owner, foreign_key: { to_table: :users }
      t.references :superuser_owner, foreign_key: { to_table: :superusers }

      t.timestamps
    end
  end
end
