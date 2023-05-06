class CartItemSerializer < ActiveModel::Serializer
  attributes :id, :qty, :total_item_cost
  belongs_to :cart
  belongs_to :item

  # def total_cost
  #   # self.price * self.qty
  #   0
  # end

end
