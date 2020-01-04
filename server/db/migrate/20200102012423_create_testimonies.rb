class CreateTestimonies < ActiveRecord::Migration[6.0]
  def change
    create_table :testimonies do |t|
      t.string :title, null: false
      t.string :text, null: false
      t.references :media, null: false, foreign_key: true
      t.references :created_by,  null: false, foreign_key: { to_table: :users }
      
      t.timestamps
    end
  end
end
