class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :items, :carts
end
