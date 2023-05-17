class User < ApplicationRecord
  has_secure_password
  validates :username, presence: true, uniqueness: true
  validates :password, presence: true
  validates :password_digest, presence: true
  has_many :items, dependent: :destroy
  has_many :carts, dependent: :destroy
  has_many :cart_items, through: :carts
  has_many :favorites
  has_many :item_reviews
  has_many :orders
end
