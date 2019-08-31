class Profile < ApplicationRecord
  has_many :workouts
  belongs_to :user
end
