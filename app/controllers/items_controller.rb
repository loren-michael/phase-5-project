class ItemsController < ApplicationController
  before_action :set_item, only: %i[ show update destroy ]

  # GET /items
  def index
    @items = Item.all

    render json: @items
  end

  # GET /items/1
  def show
    render json: @item
  end

  # POST /items
  def create
    # @item = Item.new(item_params)

    # if @item.save
    #   render json: @item, status: :created, location: @item
    # else
    #   render json: @item.errors, status: :unprocessable_entity
    # end
    item = @current_user.items.create!(
      user_id: @current_user.id,
      title: params[:title],
      image: params[:image],
      decsription: params[:description],
      qty: params[:qty],
      category: params[:category],
      condition: params[:condition],
      make: params[:make],
      model: params[:model],
      price: params[:price]
    )


  end

  # PATCH/PUT /items/1
  def update
    if @item.update(item_params)
      render json: @item
    else
      render json: @item.errors, status: :unprocessable_entity
    end
  end

  # DELETE /items/1
  def destroy
    @item.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_item
      @item = Item.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def item_params
      params.permit(:user_id, :title, :image, :description, :qty, :category, :condition, :make, :model, :price)
    end
end
