class OrderItemSerializer < ActiveModel::Serializer
  attributes :id,
  belongs_to :user
  belongs_to :order
end
