Rails.application.routes.draw do
  namespace 'api' do
    namespace 'v1' do
      # from sessions controller
      # POST
      post 'sessions.json', to: 'sessions#create'

      # from passwords controller
      # POST
      post 'forgot_password.json', to: 'passwords#forgot'
      post 'reset_password.json', to: 'passwords#reset'

      # from users controller
      # GET
      get 'users/list.json', to: 'users#index'
      get 'users/show.json/:id', to: 'users#show'
      get 'users/show.json', to: 'users#self_show'
      # POST
      post 'users/create.json', to: 'users#create'
      # PUT
      put 'users/update.json/:id', to: 'users#update'
      put 'users/update.json', to: 'users#self_update'
      # DELETE
      delete 'users/destroy.json/:id', to: 'users#destroy'
      delete 'users/destroy.json', to: 'users#self_destroy'
    end
  end
end
