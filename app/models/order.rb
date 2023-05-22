class Order < ApplicationRecord
  belongs_to :user
  has_many :order_items
  has_many :items, through: :order_items

  def add_item item, qty
    self.order_items.create(item: item, qty: qty, price: item.price)
  end

  def order_price
    sum = 0.0
    self.object.order_items.each do |item|
      sum += item.total_item_cost
    end
    sum
  end
end
