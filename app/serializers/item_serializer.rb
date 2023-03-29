class ItemSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :name, :image, :description, :qty, :category
end
