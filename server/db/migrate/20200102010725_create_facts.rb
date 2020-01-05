class CreateFacts < ActiveRecord::Migration[6.0]
  def change
    create_table :facts do |t|
      t.string :title, null: false
      t.string :text, null: false
      t.references :created_by,  null: false, foreign_key: { to_table: :users }

      t.timestamps
    end
  end
end