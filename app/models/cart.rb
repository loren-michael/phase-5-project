class Cart < ApplicationRecord
  belongs_to :user
  has_many :cart_items
  has_many :items, through: :cart_items

  def add_item item, qty
    self.cart_items.create(item: item, qty: qty, price: item.price)
  end

  def cart_price
    sum = 0.0
    self.object.order_items.each do |item|
      sum += item.total_item_cost
    end
    sum
  end

end
