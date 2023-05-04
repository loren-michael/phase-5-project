class CreateCartItemsController < ApplicationController
  before_action :set_create_cart_item, only: [:show, :update, :destroy]

  # GET /create_cart_items
  def index
    @create_cart_items = CreateCartItem.all

    render json: @create_cart_items
  end

  # GET /create_cart_items/1
  def show
    render json: @create_cart_item
  end

  # POST /create_cart_items
  def create
    @create_cart_item = CreateCartItem.new(create_cart_item_params)

    if @create_cart_item.save
      render json: @create_cart_item, status: :created, location: @create_cart_item
    else
      render json: @create_cart_item.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /create_cart_items/1
  def update
    if @create_cart_item.update(create_cart_item_params)
      render json: @create_cart_item
    else
      render json: @create_cart_item.errors, status: :unprocessable_entity
    end
  end

  # DELETE /create_cart_items/1
  def destroy
    @create_cart_item.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_create_cart_item
      @create_cart_item = CreateCartItem.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def create_cart_item_params
      params.require(:create_cart_item).permit(:cart_id, :item_id)
    end
end
