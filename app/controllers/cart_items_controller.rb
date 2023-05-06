class CartItemsController < ApplicationController
  before_action :set_cart_item, only: [:show, :update, :destroy]

  # GET /cart_items
  def index
    @cart_items = CartItem.all

    render json: @cart_items
  end

  # GET /cart_items/1
  def show
    render json: @cart_item
  end

  # POST /cart_items
  def create
    item = Item.find_by_id(cart_item_params[:item_id])
    cart = Cart.find_by_id(cart_item_params[:cart_id])
    cart_item = cart.add_item(item, cart_item_params[:qty])
    if cart_item.valid?
      render json: cart_item, status: 201
    else
      render json: { errors: [cart_item.errors.full_messages] }, status: 422
    end
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
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_cart_item
      @cart_item = CartItem.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def cart_item_params
      params.permit(:cart_id, :item_id, :qty)
    end
end
