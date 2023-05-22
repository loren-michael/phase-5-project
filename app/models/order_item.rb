class OrderItem < ApplicationRecord
  belongs_to :order
  belongs_to :item

  def total_item_cost
    self.price * self.qty
  end

end
