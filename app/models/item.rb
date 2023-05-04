class Item < ApplicationRecord
  belongs_to :user
  has_many :item_reviews
  has_many :cart_items, dependent: :destroy
  has_many :carts, through: :cart_items
end
