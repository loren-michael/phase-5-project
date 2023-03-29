# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


puts "Resetting Tables"

Favorite.destroy_all
Order.destroy_all
Cart.destroy_all
Item_Reviews.destroy_all
Item.destroy_all
User.destroy_all


puts "Creating Users"

u1 = User.create(username: "", first_name: "", last_name: "", email: "", password: "")
u2 = User.create(username: "", first_name: "", last_name: "", email: "", password: "")
u3 = User.create(username: "", first_name: "", last_name: "", email: "", password: "")
u4 = User.create(username: "", first_name: "", last_name: "", email: "", password: "")
u5 = User.create(username: "", first_name: "", last_name: "", email: "", password: "")
u6 = User.create(username: "", first_name: "", last_name: "", email: "", password: "")
u7 = User.create(username: "", first_name: "", last_name: "", email: "", password: "")
u8 = User.create(username: "", first_name: "", last_name: "", email: "", password: "")
u9 = User.create(username: "", first_name: "", last_name: "", email: "", password: "")
u10 = User.create(username: "", first_name: "", last_name: "", email: "", password: "")

puts "Adding Items"

i1 = Item.create(
  user_id: "",
  title: "",
  image: "",
  description: "",
  qty: ,
  category: "",
  condition: "",
  make: "",
  model: "",
  price: ,
)
i2 = Item.create(
  user_id: "",
  title: "",
  image: "",
  description: "",
  qty: ,
  category: "",
  condition: "",
  make: "",
  model: "",
  price: ,
)
i3 = Item.create(
  user_id: "",
  title: "",
  image: "",
  description: "",
  qty: ,
  category: "",
  condition: "",
  make: "",
  model: "",
  price: ,
)
i4 = Item.create(
  user_id: "",
  title: "",
  image: "",
  description: "",
  qty: ,
  category: "",
  condition: "",
  make: "",
  model: "",
  price: ,
)
i5 = Item.create(
  user_id: "",
  title: "",
  image: "",
  description: "",
  qty: ,
  category: "",
  condition: "",
  make: "",
  model: "",
  price: ,
)
i6 = Item.create(
  user_id: "",
  title: "",
  image: "",
  description: "",
  qty: ,
  category: "",
  condition: "",
  make: "",
  model: "",
  price: ,
)
i7 = Item.create(
  user_id: "",
  title: "",
  image: "",
  description: "",
  qty: ,
  category: "",
  condition: "",
  make: "",
  model: "",
  price: ,
)
i8 = Item.create(
  user_id: "",
  title: "",
  image: "",
  description: "",
  qty: ,
  category: "",
  condition: "",
  make: "",
  model: "",
  price: ,
)
i9 = Item.create(
  user_id: "",
  title: "",
  image: "",
  description: "",
  qty: ,
  category: "",
  condition: "",
  make: "",
  model: "",
  price: ,
)
i10 = Item.create(
  user_id: "",
  title: "",
  image: "",
  description: "",
  qty: ,
  category: "",
  condition: "",
  make: "",
  model: "",
  price: ,
)
i11 = Item.create(
  user_id: "",
  title: "",
  image: "",
  description: "",
  qty: ,
  category: "",
  condition: "",
  make: "",
  model: "",
  price: ,
)
i12 = Item.create(
  user_id: "",
  title: "",
  image: "",
  description: "",
  qty: ,
  category: "",
  condition: "",
  make: "",
  model: "",
  price: ,
)


puts "Basic Store Seeding Complete"