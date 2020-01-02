class CreateTips < ActiveRecord::Migration[6.0]
  def change
    create_table :tips do |t|
      t.string :title, null: false
      t.string :text, null: false

      t.timestamps
    end
  end
end
