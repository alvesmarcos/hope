class AddReferencesToUsers < ActiveRecord::Migration[6.0]
  def change
    add_foreign_key :users, :profiles
    add_foreign_key :users, :roles
    add_foreign_key :users, :media_files
  end
end