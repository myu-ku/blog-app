Rails.application.routes.draw do
  namespace :api, format: 'json' do
    namespace :v1 do
      namespace :memo do
        resources :memos, only: [:index, :create]
      end
    end
  end
end
