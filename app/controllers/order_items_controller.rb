class OrderItemsController < ApplicationController
  before_action :set_order_item, only: [:show, :update, :destroy]
  before_action :authorize

  # GET /order_items
  def index
    items = @current_user.order_items

    render json: items, include: :item
  end

  # GET /order_items/1
  def show
    render json: @order_item
  end

  # POST /order_items
  def create
    find_order
    item = Item.find_by_id(params[:id])
  end

  # PATCH/PUT /order_items/1
  def update
    if @order_item.update(order_item_params)
      render json: @order_item
    else
      render json: @order_item.errors, status: :unprocessable_entity
    end
  end

  # DELETE /order_items/1
  def destroy
    @order_item.destroy
  end

  private

    def find_order
      @order = @current_user.orders.find_by_id(params[:id])
    end

    # Use callbacks to share common setup or constraints between actions.
    def set_order_item
      @order_item = OrderItem.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def order_item_params
      params.require(:order_item).permit(:belongs_to, :belongs_to, :price)
    end
end
