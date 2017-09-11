Rails.application.routes.draw do
  namespace :api do
    resources :houses do
      resources :families
    end
  end
end
