Rails.application.routes.draw do

  root to: 'rooms_all#index'
  resources :rooms_all, only: :index
  
end
