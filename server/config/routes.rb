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
    # PUT
    put 'avatars/update.json', to: 'avatars#update'
    # DELETE
    delete 'avatars/destroy.json', to: 'avatars#destroy'
    
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
    
    # ArticlesController
    # GET
    get 'articles/list.json', to: 'articles#index'
    get 'articles/show/:id.json', to: 'articles#show'
    # POST
    post 'articles/create.json', to: 'articles#create'
    # PUT
    put 'articles/update/:id.json', to: 'articles#update'
    # DELETE
    delete 'articles/destroy/:id.json', to: 'articles#destroy'
    
    # ThumbnailArticlesController
    # PUT
    put 'thumbnail_articles/update/:id.json', to: 'thumbnail_articles#update'
    # DELETE
    delete 'thumbnail_articles/destroy/:id.json', to: 'thumbnail_articles#destroy'
  end
end