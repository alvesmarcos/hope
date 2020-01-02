class CreateLevelFamilyRelationships < ActiveRecord::Migration[6.0]
  def change
    create_table :level_family_relationships do |t|
      t.string :name, null: false
      t.string :description, null: false
      t.string :slug, null: false

      t.timestamps

      t.index :slug, unique: true
    end
  end
end
