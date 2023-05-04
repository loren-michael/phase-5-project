class Item < ApplicationRecord
  belongs_to :user
  has_many :item_reviews
  has many :cart_items, dependent: :destroy
  has many :carts, through: :cart_items
end
