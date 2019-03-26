class CreateExerciseSets < ActiveRecord::Migration[5.2]
  def change
    create_table :exercise_sets do |t|
      t.integer :repetitions
      t.string :weight

      t.timestamps
    end
  end
end
