class CartItemSerializer < ActiveModel::Serializer
  attributes :id, :qty, :items, :total_item_cost
  belongs_to :cart
  belongs_to :item

end
