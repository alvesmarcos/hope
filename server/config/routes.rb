Rails.application.routes.draw do
  namespace 'api' do
    namespace 'v1' do
      post 'auth/superuser', to: 'sessions#auth_superuser'
      post 'superuser', to: 'superusers#create'
    end
  end
end
