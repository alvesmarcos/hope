class CreateMediaFiles < ActiveRecord::Migration[6.0]
  def change
    create_table :media_files do |t|
      t.string :original_name, null: false
      t.string :path, null: false
      t.string :mime_type, null: false
      t.references :created_by, foreign_key: { to_table: :users }, null: false

      t.timestamps
    end
  end
end
