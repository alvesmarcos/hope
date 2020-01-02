class CreateTips < ActiveRecord::Migration[6.0]
  def change
    create_table :tips do |t|
      t.string :title, null: false
      t.string :text, null: false
      t.references :created_by,  null: false, foreign_key: foreign_key: { to_table: :superusers }

      t.timestamps
    end
  end
end
