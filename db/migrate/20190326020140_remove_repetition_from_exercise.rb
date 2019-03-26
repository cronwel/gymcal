class RemoveRepetitionFromExercise < ActiveRecord::Migration[5.2]
  def change
    remove_column :exercises, :repetition
  end
end
