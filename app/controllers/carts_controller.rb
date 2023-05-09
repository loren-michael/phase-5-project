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

  def add_to_active_cart
    
  end

  # GET /carts/1
  def show
    render json: @cart
  end

  # POST /carts
  def create
    @cart = Cart.new(cart_params)

    if @cart.save
      render json: @cart, status: :created, location: @cart
    else
      render json: @cart.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /carts/1
  def update
    if @cart.update(cart_params)
      render json: @cart
    else
      render json: @cart.errors, status: :unprocessable_entity
    end
  end

  # DELETE /carts/1
  def destroy
    @cart.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_cart
      @cart = Cart.find(params[:id])
    end

    # def user_carts
    #   @carts = Cart.all.filter(cart => user_id === params[:user_id])
    # end

    # Only allow a list of trusted parameters through.
    def cart_params
      params.permit(:user_id, :active)
    end
end
