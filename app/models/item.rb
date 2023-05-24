class Item < ApplicationRecord
  belongs_to :user
  has_many :item_reviews
  has_many :cart_items, dependent: :destroy
  has_many :carts, through: :cart_items
  validates :title, presence: true
  validates :image, presence: true
  validates :price, presence: true
  validates :make, presence: true
  validates :model, presence: true
  validates :condition, presence: true
  validates :description, presence: true
  validates :category, presence: true
end
