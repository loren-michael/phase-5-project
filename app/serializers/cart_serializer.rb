class CartSerializer < ActiveModel::Serializer
  attributes :id, :active
  has_one :user_id
end
