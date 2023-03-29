class ItemReviewsController < ApplicationController
  before_action :set_item_review, only: %i[ show update destroy ]

  # GET /item_reviews
  def index
    @item_reviews = ItemReview.all

    render json: @item_reviews
  end

  # GET /item_reviews/1
  def show
    render json: @item_review
  end

  # POST /item_reviews
  def create
    @item_review = ItemReview.new(item_review_params)

    if @item_review.save
      render json: @item_review, status: :created, location: @item_review
    else
      render json: @item_review.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /item_reviews/1
  def update
    if @item_review.update(item_review_params)
      render json: @item_review
    else
      render json: @item_review.errors, status: :unprocessable_entity
    end
  end

  # DELETE /item_reviews/1
  def destroy
    @item_review.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_item_review
      @item_review = ItemReview.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def item_review_params
      params.require(:item_review).permit(:item_id_id, :user_id_id, :review)
    end
end
