class CreateDocumentaries < ActiveRecord::Migration[6.0]
  def change
    create_table :documentaries do |t|
      t.string :title, null: false
      t.string :description, null: false
      t.references :media, null: false, foreign_key: true
      t.string :url, null: false
      t.references :created_by,  null: false, foreign_key: { to_table: :superusers }

      t.timestamps
    end
  end
end
