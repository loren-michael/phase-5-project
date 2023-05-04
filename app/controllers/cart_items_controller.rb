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
    active_cart = @current_user.carts.filter { |cart| cart.active = true }
    if active_cart
      render json: active_cart, status: 200
    else
      render json: Cart.create, status: 201
    end

    # @cart_item = CartItem.new(cart_item_params)

    # if @cart_item.save
    #   render json: @cart_item, status: :created, location: @cart_item
    # else
    #   render json: @cart_item.errors, status: :unprocessable_entity
    # end
  end

  # PATCH/PUT /cart_items/1
  def update
    if @cart_item.update(cart_item_params)
      render json: @cart_item
    else
      render json: @cart_item.errors, status: :unprocessable_entity
    end
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
      params.permit(:cart_id, :item_id)
    end
end
