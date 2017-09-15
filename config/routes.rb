Rails.application.routes.draw do
  namespace :api do
    resources :events
  end


  mount_devise_token_auth_for 'User', at: 'auth'
  
  namespace :api do
    resources :houses do
      resources :families, only: [:index, :show] do
        resources :users
      end
    end
  end
end
