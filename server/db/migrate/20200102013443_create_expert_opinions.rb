class CreateExpertOpinions < ActiveRecord::Migration[6.0]
  def change
    create_table :expert_opinions do |t|
      t.string :text, null: false
      t.references :created_by,  null: false, foreign_key: { to_table: :users }

      t.timestamps
    end
  end
end
