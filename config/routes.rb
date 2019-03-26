Rails.application.routes.draw do

  namespace :api do
    namespace :v1 do
      resources :profiles
      resources :workouts do
        resources :exercises
        resources :exercise_sets
      end
    end
  end



  root "profiles#index"






end
