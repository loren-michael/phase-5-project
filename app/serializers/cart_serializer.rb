class CartSerializer < ActiveModel::Serializer
  attributes :id, :active, :items
  has_one :user_id
end
