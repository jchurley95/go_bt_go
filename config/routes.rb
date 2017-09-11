Rails.application.routes.draw do
  namespace :api do
    resources :event_dates do
      resources :events
    end
  end

  namespace :api do
    resources :houses do
      resources :families
    end
  end
end
