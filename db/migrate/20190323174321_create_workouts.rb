class CreateWorkouts < ActiveRecord::Migration[5.2]
  def change
    create_table :workouts do |t|
      t.date :day
      t.time :start
      t.time :end

      t.timestamps
    end
  end
end
