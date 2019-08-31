class Workout < ApplicationRecord
  has_one_attached :image, dependent: :destroy
  has_many :exercises, dependent: :destroy
  belongs_to :user
end

