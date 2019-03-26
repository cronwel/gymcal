
module API::V1
class WorkoutsController < ApplicationController


 def index
  @workouts = Workouts.all
  
 end
end
end