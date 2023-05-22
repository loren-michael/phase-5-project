class CartsController < ApplicationController
  before_action :set_cart, only: %i[ show update destroy ]

  # GET /carts
  def index
    carts = @current_user.carts
    render json: carts
  end

  def active_cart
    active_cart = @current_user.carts.filter { |cart| cart.active = true }
    render json: active_cart
  end

  # GET /carts/1
  def show
    render json: @cart
  end

  # POST /carts
  def create
    @cart = @current_user.carts.create!(active: true, purchased: false)
    render json: @cart, status: :created
  end

  # PATCH/PUT /carts/1
  def update
    if @cart.update(cart_params)
      render json: @cart
    else
      render json: @cart.errors, status: 422
    end
  end

  # PATCH /carts/1
  def activate_cart
    deactivate_carts
    @cart.update(active: true)
    render json: @cart
  end

  # PATCH /empty_cart/1
  def empty_cart
    cart = Cart.find(params[:id])
    items = cart.cart_items
    items.destroy(items)
    render json: cart, status: 200
  end

  # DELETE /carts/1
  def destroy
    @cart.destroy
    render json: @cart
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_cart
      @cart = Cart.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def cart_params
      params.permit(:user_id, :active, :purchased)
    end

    # Deactivate all of current user's carts so that one can be activated.
    def deactivate_carts
      @current_user.carts.each do |cart|
        cart.update(active: false)
        # puts cart
      end
    end
end
