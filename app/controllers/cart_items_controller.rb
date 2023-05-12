class CartItemsController < ApplicationController
  before_action :set_cart_item, only: [:show, :update, :destroy]
  before_action :authorize

  # GET /cart_items
  def index
    items = @current_user.cart_items
    # byebug
    render json: items, include: :item
  end

  # GET /cart_items/1
  def show
    render json: @cart_item
  end

  # POST /cart_items
  def create
    find_active_cart
    item = Item.find_by_id(params[:id])
    cart_item = CartItem.create!(cart_id: @active_cart.id, qty: 1, item_id: item.id, price: item.price)
    render json: cart_item, status: 201
  end


  # PATCH/PUT /cart_items/1
  # def update
  #   if @cart_item.update(cart_item_params)
  #     render json: @cart_item
  #   else
  #     render json: @cart_item.errors, status: :unprocessable_entity
  #   end
  # end

  # PATCH /cart_items/1
  def update
    if cart_item_params[:qty] == 0
      @cart_item.destroy
    else
      @cart_item.update(cart_item_params)
    end
    render json: @cart_item, status: 200
  end

  # DELETE /cart_items/1
  def destroy
    @cart_item.destroy
    render json: @cart_item
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_cart_item
      @cart_item = CartItem.find(params[:id])
    end

    def find_active_cart
      # @active_cart = @current_user.carts.find(params[:active])
      @active_cart = @current_user.carts.find_by active: true
      # @active_cart = @current_user.carts.filter { |cart| cart.active = true }
    end

    # Only allow a list of trusted parameters through.
    def cart_item_params
      params.permit(:cart_id, :item_id, :qty)
    end
end
