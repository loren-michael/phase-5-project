class OrdersController < ApplicationController
  before_action :set_order, only: %i[ show update destroy ]

  # GET /orders
  def index
    @orders = Order.all

    render json: @orders
  end

  # GET /orders/1
  def show
    render json: @order
  end

  # POST /orders
  def create
    order = @current_user.orders.new(cart_id: params[:id])

    if order.save
      render json: order, status: :created
    else
      render json: { errors: [order.errors.full_messages] }
    end
    # order = @current_user.orders.create!(cart_id: params[:cart_id])
    # render json: order, status: :created
    # if @order.save
    #   render json: @order, status: :created, location: @order
    # else
    #   render json: @order.errors, status: :unprocessable_entity
    # end
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
    # Use callbacks to share common setup or constraints between actions.
    def set_order
      @order = Order.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def order_params
      params.permit(:user_id, :id, :cart_id)
    end
end
