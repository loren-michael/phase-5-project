# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


puts "Resetting Tables"

CartItem.destroy_all
Favorite.destroy_all
Order.destroy_all
Cart.destroy_all
ItemReview.destroy_all
Item.destroy_all
User.destroy_all


puts "Creating Users"

u1 = User.create(username: "user1", first_name: "User", last_name: "One", email: "userone@gmail.com", password: "password")
u2 = User.create(username: "user2", first_name: "User", last_name: "Two", email: "usertwo@gmail.com", password: "password")
u3 = User.create(username: "user3", first_name: "User", last_name: "Three", email: "userthree@gmail.com", password: "password")
u4 = User.create(username: "user4", first_name: "User", last_name: "Four", email: "userfour@gmail.com", password: "password")
u5 = User.create(username: "user5", first_name: "User", last_name: "Five", email: "userfive@gmail.com", password: "password")
u6 = User.create(username: "user6", first_name: "User", last_name: "Six", email: "usersix@gmail.com", password: "password")
u7 = User.create(username: "user7", first_name: "User", last_name: "Seven", email: "userseven@gmail.com", password: "password")
u8 = User.create(username: "user8", first_name: "User", last_name: "Eight", email: "usereight@gmail.com", password: "password")
u9 = User.create(username: "user9", first_name: "User", last_name: "Nine", email: "usernine@gmail.com", password: "password")
u10 = User.create(username: "user10", first_name: "User", last_name: "Ten", email: "userten@gmail.com", password: "password")


puts "Building Carts"

c1 = Cart.create(user_id: 1, active: true)
c2 = Cart.create(user_id: 2, active: true)
c3 = Cart.create(user_id: 3, active: true)
c4 = Cart.create(user_id: 4, active: true)




puts "Adding Items to Store"

i1 = Item.create(
  user_id: u1.id,
  title: "Shure SM58 Vocal Mic",
  image: "https://cdn.shopify.com/s/files/1/0277/2631/5568/products/ACCESSORY-PACK-958_70ce4c0b-0f62-4007-a572-a5e528594af0_1024x.jpg?v=1582623600",
  description: "Used Shure SM58 Vocal Mic, works great, light wear",
  qty: 1,
  category: "Microphones",
  condition: "Used - Good",
  make: "Shure",
  model: "SM58",
  price: 74.99
)
i2 = Item.create(
  user_id: u1.id,
  title: "Sennheiser e609 Guitar Amp Mic",
  image: "https://static.pxlecdn.com/photos/240683949/medium/5d3bd5fc5066fb95facf.jpg",
  description: "Used Sennheiser e609 Mic, hangs over guitar cabinet, sounds great!",
  qty: 1,
  category: "Microphones",
  condition: "Used - Good",
  make: "Sennheiser",
  model: "e609",
  price: 78.43,
)
i3 = Item.create(
  user_id: u1.id,
  title: "Radial Passive DI Box",
  image: "https://media.sweetwater.com/api/i/q-82__f-webp__ha-f7c50d88e47785f7__hmac-6d28b47c2ea9f543549b6f6954a749382a6c10a3/images/items/750/ProMS2-large.jpg.auto.webp",
  description: "Radial brand passive DI box.  Professional sound.  Low noise.",
  qty: 1,
  category: "Pro Audio",
  condition: "Used - Like New",
  make: "Radial",
  model: "ProMS2",
  price: 115.00,
)
i4 = Item.create(
  user_id: u2.id,
  title: "Marshall Tube Head JCM800",
  image: "https://cdne-marshall-assets.azureedge.net/content/uploads/2943442a-55b1-4fea-9648-f648bfcba80f.jpg?20210928110411",
  description: "Used Marshall JCM800 Tube Head, sounds amazing, clear sound, touring rig",
  qty: 1,
  category: "Amps & Pedals",
  condition: "Used - Good",
  make: "Marshall",
  model: "JCM800",
  price: 1650.00,
)
i5 = Item.create(
  user_id: u3.id,
  title: "Fender Stratocaster Electric Guitar",
  image: "https://images.reverb.com/image/upload/s--tI86x0yN--/f_auto,t_large/v1627960209/y3cx8qxxrbeakwc7cfqj.jpg",
  description: "Well loved Fender Strat, 3 color sunburst with new pickguard",
  qty: 1,
  category: "Guitars",
  condition: "Used - Good",
  make: "Fender",
  model: "Stratocaster",
  price: 700.00,
)
i6 = Item.create(
  user_id: u3.id,
  title: "Vox Amp - 1x12 tube amp, well used but taken care of",
  image: "https://images.reverb.com/image/upload/s--YjclNSDu--/f_auto,t_large/v1679927989/ymelwsdmazvvwvogocc1.jpg",
  description: "Selling my Vox AC4C1-12 Combo tube amp. Works great, pedal included, all tubes in good shape.",
  qty: 1,
  category: "Pedals & Amps",
  condition: "Used - Fair",
  make: "Vox",
  model: "AC4C1-12",
  price: 325.00,
)
i7 = Item.create(
  user_id: u3.id,
  title: "Used 5-String Banjo",
  image: "https://i.ebayimg.com/images/g/lUUAAOSwRl5jvQCp/s-l500.jpg",
  description: "Selling my 5-string banjo, in good shape just don't play it anymore",
  qty: 1,
  category: "Folk Instruments",
  condition: "Used - Good",
  make: "Aria",
  model: "SB-10",
  price: 650.00,
)
i8 = Item.create(
  user_id: u4.id,
  title: "Used Audix Drum Mic Kit",
  image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTRLS0K9bVwY1si84R8kHZVRZ8K-5hvy-DMFrqQN50xRNlGrACzl5MxMbrUC9guVuqhxhSWuGAYtZVHd69yifnfwXSrfaVJ",
  description: "Well used Audix drum mic kit, 1 D6 1 D4 2 D2 and 1 i5",
  qty: 1,
  category: "Microphones",
  condition: "Used - Good",
  make: "Audix",
  model: "DP7",
  price: 499.00,
)
i9 = Item.create(
  user_id: u4.id,
  title: "Like new Boss chromatic tuner pedal",
  image: "https://media.sweetwater.com/api/i/q-82__f-webp__ha-cdb9126d6c79de48__hmac-aa928730c3360653d222e77739265369573d6ffe/images/items/750/TU3-large.jpg.auto.webp",
  description: "Selling my like-new boss tu-3 chromatic tuner pedals. Has bypass. Used for practice, works great.",
  qty: 1,
  category: "Pedals & Amps",
  condition: "Used - Like New",
  make: "Boss",
  model: "TU-3",
  price: 74.99,
)
i10 = Item.create(
  user_id: u4.id,
  title: "DW Drumset in excellent shape, orange maple finish",
  image: "https://i.pinimg.com/564x/aa/e2/64/aae2647db97deec60681139325a8d17f--play-drums-drum-kit.jpg",
  description: "5 piece DW drumset, used but in excellent shape, pick-up only",
  qty: 1,
  category: "Drums & Percussion",
  condition: "Used - Good",
  make: "DW",
  model: "N/A",
  price: 3200.00,
)
i11 = Item.create(
  user_id: u4.id,
  title: "Drum Key",
  image: "https://media.sweetwater.com/api/i/q-82__f-webp__ha-6a199aa62d3cbcf9__hmac-389af734fcb6228bc97d14bb2c0dc4e1053bdc06/images/items/750/P41-large.jpg.auto.webp",
  description: "Standard Ludwig drum key, a must have for your workbox",
  qty: 15,
  category: "Accessories",
  condition: "New",
  make: "Ludwig",
  model: "P41",
  price: 7.50,
)
i12 = Item.create(
  user_id: u4.id,
  title: "New Roland AX-Edge Keytar",
  image: "https://media.guitarcenter.com/is/image/MMGS7/L42549000001000-00-720x720.jpg",
  description: "Brand new Roland Keytar, black with red trim, all black keys. 49 keys",
  qty: 1,
  category: "Keyboards & Synth",
  condition: "New",
  make: "Roland",
  model: "AX-Edge",
  price: 1199.00,
)


puts "Filling Carts"

# ci1 = CartItem.create(cart_id: c1.id, item_id: i5.id)
# ci2 = CartItem.create(cart_id: c1.id, item_id: i12.id)
c1.add_item(i11, 12)
c1.add_item(i12, 1)


puts "Basic Store Seeding Complete"