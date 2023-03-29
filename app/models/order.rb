class Order < ApplicationRecord
  belongs_to :user_id
  belongs_to :cart_id
end
