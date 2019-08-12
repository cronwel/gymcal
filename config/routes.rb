Rails.application.routes.draw do

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :profiles do
        resources :workouts do
          resources :exercises do
            resources :exercise_sets
          end
        end
      end
    end
  end

  root "profiles#index"

end
