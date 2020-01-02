class CreateQuotes < ActiveRecord::Migration[6.0]
  def change
    create_table :quotes do |t|
      t.string :text, null: false
      t.string :author, null: false
      t.references :created_by,  null: false, foreign_key: foreign_key: { to_table: :superusers }

      t.timestamps
    end
  end
end
