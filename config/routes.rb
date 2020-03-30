# frozen_string_literal: true

Rails.application.routes.draw do
  root to: 'home#index'
  get '/auth', to: 'home#index'
  get '/quiz-creator', to: 'home#index'
end
