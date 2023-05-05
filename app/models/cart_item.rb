class CartItem < ApplicationRecord
  belongs_to :cart
  belongs_to :item

  def total_item_cost
    self.price * self.qty
  end

end
