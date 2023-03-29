class OrderSerializer < ActiveModel::Serializer
  attributes :id
  has_one :user_id
  has_one :cart_id
end
