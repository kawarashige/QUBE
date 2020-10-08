Rails.application.routes.draw do

  devise_for :all_users
  root to: 'rooms_all#index'
  resources :rooms_all, only: :index
  resources :studies, only: :index
  resources :homes, only: :index

end
