NewReader::Application.routes.draw do
  resources :feeds, only: [:index, :create, :refresh] do
    resources :entries, only: [:index]
  end

  get 'feed/:id/refresh', to: "feeds#refresh"
  root to: "feeds#index"
end
