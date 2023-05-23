class OrdersController < ApplicationController
  before_action :set_order, only: %i[ show update destroy ]

  # GET /orders
  def index
    orders = @current_user.orders
    render json: orders
  end

  # GET /orders/1
  def show
    render json: @order
  end

  # POST /orders
  def create
    order = @current_user.orders.create!(order_params)
    render json: order, status: :created
  end

  def process_cart_items
    cart = @current_user.carts.find(params[:id])
    puts cart
  end

  # PATCH/PUT /orders/1
  def update
    if @order.update(order_params)
      render json: @order
    else
      render json: @order.errors, status: :unprocessable_entity
    end
  end

  # DELETE /orders/1
  def destroy
    @order.destroy
  end

  private

    def set_order
      @order = Order.find(params[:id])
    end

    def order_params
      params.permit(:user_id, :id, :cart_id)
    end
end
