Rails.application.routes.draw do

  devise_for :all_users
  root to: 'all_rooms#index'
  resources :all_rooms, only: :index
  resources :studies, only: :index
  resources :homes, only: :index

end
