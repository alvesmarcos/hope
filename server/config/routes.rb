Rails.application.routes.draw do
  namespace 'api' do
    namespace 'v1' do
      # from sessions controller
      # post methods 
      post 'sessions.json', to: 'sessions#create'

      # from users controller
      # get methods
      get 'users/list.json', to: 'users#index'
      get 'users/show.json/:id', to: 'users#show'
      get 'users/show.json', to: 'users#self_show'
      # post methods
      post 'users/create.json', to: 'users#create'
      # put methods
      put 'users/update.json/:id', to: 'users#update'
      put 'users/update.json', to: 'users#self_update'
      # delete methods
      delete 'users/destroy.json/:id', to: 'users#destroy'
      delete 'users/destroy.json', to: 'users#self_destroy'
    end
  end
end
