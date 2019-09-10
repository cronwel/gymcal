Rails.application.routes.draw do
  scope :auth do
    get 'is_signed_in', to: 'auth#is_signed_in?'
  end
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      devise_for :users
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
