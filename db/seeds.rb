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
ItemReview.destroy_all
Item.destroy_all
User.destroy_all


puts "Creating Users"

u1 = User.create(username: "user1", first_name: "User", last_name: "One", email: "userone@gmail.com", password: "password")
# u2 = User.create(username: "", first_name: "", last_name: "", email: "", password: "")
# u3 = User.create(username: "", first_name: "", last_name: "", email: "", password: "")
# u4 = User.create(username: "", first_name: "", last_name: "", email: "", password: "")
# u5 = User.create(username: "", first_name: "", last_name: "", email: "", password: "")
# u6 = User.create(username: "", first_name: "", last_name: "", email: "", password: "")
# u7 = User.create(username: "", first_name: "", last_name: "", email: "", password: "")
# u8 = User.create(username: "", first_name: "", last_name: "", email: "", password: "")
# u9 = User.create(username: "", first_name: "", last_name: "", email: "", password: "")
# u10 = User.create(username: "", first_name: "", last_name: "", email: "", password: "")

puts "Adding Items"

i1 = Item.create(
  user_id: u1.id,
  title: "Shure SM58 Vocal Mic",
  image: "https://cdn.shopify.com/s/files/1/0277/2631/5568/products/ACCESSORY-PACK-958_70ce4c0b-0f62-4007-a572-a5e528594af0_1024x.jpg?v=1582623600",
  description: "Used Shure SM58 Vocal Mic, works great, light wear",
  qty: 4,
  category: "Microphones",
  condition: "Used",
  make: "Shure",
  model: "SM58",
  price_cents: 75.45,
)
# i2 = Item.create(
#   user_id: u1.id,
#   title: "",
#   image: "",
#   description: "",
#   qty: 3,
#   category: "",
#   condition: "",
#   make: "",
#   model: "",
#   price: ,
# )
# i3 = Item.create(
#   user_id: u1.id,
#   title: "",
#   image: "",
#   description: "",
#   qty: 1,
#   category: "",
#   condition: "",
#   make: "",
#   model: "",
#   price: ,
# )
# i4 = Item.create(
#   user_id: u2.id,
#   title: "",
#   image: "",
#   description: "",
#   qty: 1,
#   category: "",
#   condition: "",
#   make: "",
#   model: "",
#   price: ,
# )
# i5 = Item.create(
#   user_id: u3.id,
#   title: "",
#   image: "",
#   description: "",
#   qty: 1,
#   category: "",
#   condition: "",
#   make: "",
#   model: "",
#   price: ,
# )
# i6 = Item.create(
#   user_id: u3.id,
#   title: "",
#   image: "",
#   description: "",
#   qty: 2,
#   category: "",
#   condition: "",
#   make: "",
#   model: "",
#   price: ,
# )
# i7 = Item.create(
#   user_id: u3.id,
#   title: "",
#   image: "",
#   description: "",
#   qty: 6,
#   category: "",
#   condition: "",
#   make: "",
#   model: "",
#   price: ,
# )
# i8 = Item.create(
#   user_id: u4.id,
#   title: "",
#   image: "",
#   description: "",
#   qty: 2,
#   category: "",
#   condition: "",
#   make: "",
#   model: "",
#   price: ,
# )
# i9 = Item.create(
#   user_id: u4.id,
#   title: "",
#   image: "",
#   description: "",
#   qty: 2,
#   category: "",
#   condition: "",
#   make: "",
#   model: "",
#   price: ,
# )
# i10 = Item.create(
#   user_id: u4.id,
#   title: "",
#   image: "",
#   description: "",
#   qty: 1,
#   category: "",
#   condition: "",
#   make: "",
#   model: "",
#   price: ,
# )
# i11 = Item.create(
#   user_id: u4.id,
#   title: "",
#   image: "",
#   description: "",
#   qty: 1,
#   category: "",
#   condition: "",
#   make: "",
#   model: "",
#   price: ,
# )
# i12 = Item.create(
#   user_id: u4.id,
#   title: "",
#   image: "",
#   description: "",
#   qty: 1,
#   category: "",
#   condition: "",
#   make: "",
#   model: "",
#   price: ,
# )


puts "Basic Store Seeding Complete"