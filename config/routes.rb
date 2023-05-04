Rails.application.routes.draw do
  resources :orders
  resources :carts
  resources :item_reviews
  resources :favorites
  resources :items
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  get'/me', to: 'users#show'
  post '/signup', to: 'users#create'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  # Defines the root path route ("/")
  # root "articles#index"

  get '/user_carts', to: 'carts#user_carts'

  get '/hello', to: 'application#hello_world'

  get '*path',
    to: 'fallback#index',
    constraints: ->(req) { !req.xhr? && req.format.html? }

end
