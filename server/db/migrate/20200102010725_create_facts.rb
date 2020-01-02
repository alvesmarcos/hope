class CreateFacts < ActiveRecord::Migration[6.0]
  def change
    create_table :facts do |t|
      t.string :title, null: false
      t.string :text, null: false

      t.timestamps
    end
  end
end
