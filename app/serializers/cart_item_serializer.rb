class CartItemSerializer < ActiveModel::Serializer
  attributes :id, :qty, :total_item_cost
  belongs_to :cart
  belongs_to :item

end
