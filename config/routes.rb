Rails.application.routes.draw do
  namespace api do
    namespace vi do
      resources :workouts do
        resources :exercises
      end
    end
  end



end
