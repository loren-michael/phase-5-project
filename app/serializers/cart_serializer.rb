class CartSerializer < ActiveModel::Serializer
  attributes :id, :active, :cart_items, :items, :cart_price
  has_one :user_id

  def cart_price
    sum = 0.0
    self.object.cart_items.each do |item|
      sum += item.total_item_cost
    end
    sum
  end
end
