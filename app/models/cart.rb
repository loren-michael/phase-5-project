class Cart < ApplicationRecord
  belongs_to :user
  has_many :cart_items, dependent: :destroy
  has_many :items, through: :cart_items

  def add_item(item)
    self.cart_items.create(item: item, qty: qty, price: item.price)
  end
end
