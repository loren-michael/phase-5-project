class CartItemsController < ApplicationController
  before_action :set_cart_item, only: [:show, :update, :destroy]
  before_action :authorize

  # GET /cart_items
  def index
    items = @current_user.cart_items
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
    if !@active_cart
      newCart = @current_user.carts.create!({ user_id: @current_user.id, active: true })
      cart_item = CartItem.create!(cart_id: newCart.id, qty: 1, item_id: item.id, price: item.price)
    else
      cart_item = CartItem.create!(cart_id: @active_cart.id, qty: 1, item_id: item.id, price: item.price)
    end
    render json: cart_item, status: 201
  end

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
    def set_cart_item
      @cart_item = CartItem.find(params[:id])
    end

    def find_active_cart
      @active_cart = @current_user.carts.find_by active: true
    end

    def cart_item_params
      params.permit(:cart_id, :item_id, :qty)
    end
end
