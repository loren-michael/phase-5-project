class ItemReviewSerializer < ActiveModel::Serializer
  attributes :id, :review
  has_one :item_id
  has_one :user_id
end
