class CreateProfessions < ActiveRecord::Migration[6.0]
  def change
    create_table :professions do |t|
      t.string :name, null: false
      t.string :code, null: false
 
      t.timestamps
    end
  end
end
