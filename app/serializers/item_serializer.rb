class ItemSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :title, :image, :description, :qty, :category, :price, :user
end
