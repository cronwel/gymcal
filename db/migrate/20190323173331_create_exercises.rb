class CreateExercises < ActiveRecord::Migration[5.2]
  def change
    create_table :exercises do |t|
      t.string :exercise_type
      t.string :name
      t.integer :repetition
      t.string :quality

      t.timestamps
    end
  end
end
