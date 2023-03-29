class User < ApplicationRecord
  has_secure_password
  has_many :items
  has_many :carts
  has_many :favorites
  has_many :item_reviews
  has_many :orders
end
