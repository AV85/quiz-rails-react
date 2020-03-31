# frozen_string_literal: true

Rails.application.routes.draw do
  root to: 'home#index'
  get '/auth', to: 'home#index'
  get '/quiz-creator', to: 'home#quiz_creator'
  get '/quiz-list', to: 'home#quiz_list'
end
