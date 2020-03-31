# frozen_string_literal: true

class HomeController < ApplicationController
  def quiz_list
    @quizzes = Quiz.all
    render json: @quizzes
  end

  def quiz_creator

  end
end
