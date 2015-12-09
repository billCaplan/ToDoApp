class Api::TodosController < ApplicationController

  def index
    render json: Todo.order(:id)
  end

  def show
    todo = Todo.find(params[:id])
    render json: todo
  end

  def create
    todo = Todo.create!(todo_params)
    render json: todo
  end

  def update
    todo = Todo.find(params[:id])
    todo.update!(todo_params)
    render json: todo
  end

  def destroy
    todo = Todo.find(params[:id])
    todo.destroy!
    render json: Todo.all
  end

  private

  def todo_params
    raw_params = params.require(:todo).permit(:title, :body, :done)

    if raw_params[:done] === "false"
      raw_params[:done] = false
    elsif raw_params[:done] === "true"
      raw_params[:done] = true
    end
    raw_params

  end
end
