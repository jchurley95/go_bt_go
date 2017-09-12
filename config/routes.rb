Rails.application.routes.draw do

  namespace :api do
    resources :houses do
      resources :families, only: [:index, :show]
    end
  end
end
