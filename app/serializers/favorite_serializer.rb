class FavoriteSerializer < ActiveModel::Serializer
  attributes :id
  has_one :item_id
  has_one :user_id
end
