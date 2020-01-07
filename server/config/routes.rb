Rails.application.routes.draw do
  namespace 'v1' do
    # SessionsController
    # POST
    post 'sessions.json', to: 'sessions#create'
    
    # PasswordController
    # POST
    post 'forgot_password.json', to: 'passwords#forgot'
    post 'reset_password.json', to: 'passwords#reset'

    # AvatarsController
    post 'avatars/create.json', to: 'avatars#create'
    
    # UsersController
    # GET
    get 'users/list.json', to: 'users#index'
    get 'users/show/:id.json', to: 'users#show'
    get 'users/show.json', to: 'users#self_show'
    # POST
    post 'users/create.json', to: 'users#create'
    # PUT
    put 'users/update/:id.json', to: 'users#update'
    put 'users/update.json', to: 'users#self_update'
    # DELETE
    delete 'users/destroy/:id.json', to: 'users#destroy'
    delete 'users/destroy.json', to: 'users#self_destroy'
  end
end