Rails.application.routes.draw do
  namespace 'api' do
    namespace 'v1' do
      post 'auth/superusers', to: 'sessions#auth_superuser'
      post 'superusers', to: 'superusers#create'
    end
  end
end
