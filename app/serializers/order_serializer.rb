class OrderSerializer < ActiveModel::Serializer
  attributes :id, :order_items, :items, :order_price
  has_one :user_id
  has_one :cart_id


  def order_price
    sum = 0.0
    self.object.order_items.each do |item|
      sum += item.total_item_cost
    end
    sum
  end
end
