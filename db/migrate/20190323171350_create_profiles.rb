class CreateProfiles < ActiveRecord::Migration[5.2]
  def change
    create_table :profiles do |t|
      t.integer :height
      t.integer :weight
      t.integer :age
      t.text :medical_condition

      t.timestamps
    end
  end
end
