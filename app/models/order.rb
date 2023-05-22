class Order < ApplicationRecord
  belongs_to :user
  has_many :cart_items
  has_many :items, through: :cart_items

  def order_price
    sum = 0.0
    self.object.cart_items.each do |item|
      sum += item.total_item_cost
    end
    sum
  end
end
