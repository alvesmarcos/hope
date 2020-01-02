class CreateMediaCategories < ActiveRecord::Migration[6.0]
  def change
    create_table :media_categories do |t|
      t.string :name, null: false
      t.string :description, null: false
      t.string :slug, null: false

      t.timestamps

      t.index :slug, unique: true
    end
  end
end
