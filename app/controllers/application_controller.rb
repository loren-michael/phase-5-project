class ApplicationController < ActionController::API
  include ActionController::Cookies
  rescue_from ActiveRecord::RecordInvalid, with: :render_422
  before_action :authorize

  private

    def authorize
      @current_user = User.find_by(id: session[:user_id])
      render json: { errors: ["User not authorized"] },
      status: :unauthorized unless @current_user
    end

    def render_422(exception)
      render json: { errors: exception.record.errors.full_messages }, status: 422
    end

end
