class CreateExpertOptions < ActiveRecord::Migration[6.0]
  def change
    create_table :expert_options do |t|
      t.string :text, null: false
      t.references :expert, null: false, foreign_key: true

      t.timestamps
    end
  end
end
