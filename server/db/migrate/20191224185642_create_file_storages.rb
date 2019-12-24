class CreateFileStorages < ActiveRecord::Migration[6.0]
  def change
    create_table :file_storages do |t|
      t.string :original_name, :null => false
      t.string :name, :null => false
      t.string :path, :null => false
      t.string :mime_type, :null => false

      t.timestamps
    end
  end
end
