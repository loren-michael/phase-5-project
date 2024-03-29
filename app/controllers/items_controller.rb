class ItemsController < ApplicationController
  before_action :set_item, only: %i[ show update destroy ]
  skip_before_action :authorize, only: [:index, :show]

  # GET /items
  def index
    render json: Item.all
  end

  # GET /items/1
  def show
    render json: @item
  end

  # POST /items
  def create
    item = @current_user.items.create!(
      user_id: @current_user.id,
      title: params[:title],
      image: params[:image],
      description: params[:description],
      qty: params[:qty],
      category: params[:category],
      condition: params[:condition],
      make: params[:make],
      model: params[:model],
      price: params[:price]
    )
    render json: item
  end

  # PATCH/PUT /items/1
  def update
    @item.update!(item_params)
    render json: @item
  end

  # DELETE /items/1
  def destroy
    @item.destroy
    render json: @item
  end

  private

    def set_item
      @item = Item.find(params[:id])
    end

    def item_params
      params.permit(:user_id, :title, :image, :description, :qty, :category, :condition, :make, :model, :price)
    end
end
