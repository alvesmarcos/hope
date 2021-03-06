class CreateProfiles < ActiveRecord::Migration[6.0]
  def change
    create_table :profiles do |t|
      t.string :name, null: false
      t.string :slug, null: false
      t.text :description      
      
      t.timestamps
      
      t.index :slug, unique: true
    end
  end
end