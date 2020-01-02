class CreateFaqs < ActiveRecord::Migration[6.0]
  def change
    create_table :faqs do |t|
      t.string :question, null: false
      t.string :answer, null:false
      t.references :created_by,  null: false, foreign_key: { to_table: :superusers }
      
      t.timestamps
    end
  end
end
