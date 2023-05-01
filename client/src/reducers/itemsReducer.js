const initialState = [
//   {
//     id: 1,
//     user_id: 1,
//     title: "Shure SM58 Vocal Mic",
//     image: "https://cdn.shopify.com/s/files/1/0277/2631/5568/products/ACCESSORY-PACK-958_70ce4c0b-0f62-4007-a572-a5e528594af0_1024x.jpg?v=1582623600",
//     description: "Used Shure SM58 Vocal Mic, works great, light wear",
//     qty: 4,
//     category: "Microphones",
//     condition: "Used - Good",
//     make: "Shure",
//     model: "SM58",
//     price: 74.99
//   },
//   {
//     id: 2,
//     user_id: 1,
//     title: "Sennheiser e609 Guitar Amp Mic",
//     image: "https://static.pxlecdn.com/photos/240683949/medium/5d3bd5fc5066fb95facf.jpg",
//     description: "Used Sennheiser e609 Mic, hangs over guitar cabinet, sounds great!",
//     qty: 3,
//     category: "Microphones",
//     condition: "Used - Good",
//     make: "Sennheiser",
//     model: "e609",
//     price: 78.43,
//   },
//   {
//     id: 3,
//     user_id: 1,
//     title: "Radial Passive DI Box",
//     image: "https://media.sweetwater.com/api/i/q-82__f-webp__ha-f7c50d88e47785f7__hmac-6d28b47c2ea9f543549b6f6954a749382a6c10a3/images/items/750/ProMS2-large.jpg.auto.webp",
//     description: "Radial brand passive DI box.  Professional sound.  Low noise.",
//     qty: 4,
//     category: "Pro Audio",
//     condition: "Used - Like New",
//     make: "Radial",
//     model: "ProMS2",
//     price: 115.00,
//   },
//   {
//     id: 4,
//     user_id: 2,
//     title: "Marshall Tube Head JCM800",
//     image: "https://cdne-marshall-assets.azureedge.net/content/uploads/2943442a-55b1-4fea-9648-f648bfcba80f.jpg?20210928110411",
//     description: "Used Marshall JCM800 Tube Head, sounds amazing, clear sound, touring rig",
//     qty: 1,
//     category: "Amps & Pedals",
//     condition: "Used - Good",
//     make: "Marshall",
//     model: "JCM800",
//     price: 1650.00,
//   },
//   {
//     id: 5,
//     user_id: 3,
//     title: "Fender Stratocaster Electric Guitar",
//     image: "https://images.reverb.com/image/upload/s--tI86x0yN--/f_auto,t_large/v1627960209/y3cx8qxxrbeakwc7cfqj.jpg",
//     description: "Well loved Fender Strat, 3 color sunburst with new pickguard",
//     qty: 1,
//     category: "Guitars",
//     condition: "Used - Good",
//     make: "Fender",
//     model: "Stratocaster",
//     price: 700.00,
//   },
//   {
//     id: 6,
//     user_id: 3,
//     title: "Vox Amp - 1x12 tube amp, well used but taken care of",
//     image: "https://images.reverb.com/image/upload/s--YjclNSDu--/f_auto,t_large/v1679927989/ymelwsdmazvvwvogocc1.jpg",
//     description: "Selling my Vox AC4C1-12 Combo tube amp. Works great, pedal included, all tubes in good shape.",
//     qty: 1,
//     category: "Pedals & Amps",
//     condition: "Used - Fair",
//     make: "Vox",
//     model: "AC4C1-12",
//     price: 325.00,
//   },
//   {
//     id: 7,
//     user_id: 3,
//     title: "Used 5-String Banjo",
//     image: "https://i.ebayimg.com/images/g/lUUAAOSwRl5jvQCp/s-l500.jpg",
//     description: "Selling my 5-string banjo, in good shape just don't play it anymore",
//     qty: 1,
//     category: "Folk Instruments",
//     condition: "Used - Good",
//     make: "Aria",
//     model: "SB-10",
//     price: 650.00,
//   },
//   {
//     id: 8,
//     user_id: 4,
//     title: "Used Audix Drum Mic Kit",
//     image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTRLS0K9bVwY1si84R8kHZVRZ8K-5hvy-DMFrqQN50xRNlGrACzl5MxMbrUC9guVuqhxhSWuGAYtZVHd69yifnfwXSrfaVJ",
//     description: "Well used Audix drum mic kit, 1 D6 1 D4 2 D2 and 1 i5",
//     qty: 1,
//     category: "Microphones",
//     condition: "Used - Good",
//     make: "Audix",
//     model: "DP7",
//     price: 499.00,
//   },
//   {
//     id: 9,
//     user_id: 4,
//     title: "Like new Boss chromatic tuner pedal",
//     image: "https://media.sweetwater.com/api/i/q-82__f-webp__ha-cdb9126d6c79de48__hmac-aa928730c3360653d222e77739265369573d6ffe/images/items/750/TU3-large.jpg.auto.webp",
//     description: "Selling my like-new boss tu-3 chromatic tuner pedals. Has bypass. Used for practice, works great.",
//     qty: 3,
//     category: "Pedals & Amps",
//     condition: "Used - Like New",
//     make: "Boss",
//     model: "TU-3",
//     price: 74.99,
//   },
//   {
//     id: 10,
//     user_id: 4,
//     title: "DW Drumset in excellent shape, orange maple finish",
//     image: "https://i.pinimg.com/564x/aa/e2/64/aae2647db97deec60681139325a8d17f--play-drums-drum-kit.jpg",
//     description: "5 piece DW drumset, used but in excellent shape, pick-up only",
//     qty: 1,
//     category: "Drums & Percussion",
//     condition: "Used - Good",
//     make: "DW",
//     model: "N/A",
//     price: 3200.00,
//   },
//   {
//     id: 11,
//     user_id: 4,
//     title: "Drum Key",
//     image: "https://media.sweetwater.com/api/i/q-82__f-webp__ha-6a199aa62d3cbcf9__hmac-389af734fcb6228bc97d14bb2c0dc4e1053bdc06/images/items/750/P41-large.jpg.auto.webp",
//     description: "Standard Ludwig drum key, a must have for your workbox",
//     qty: 50,
//     category: "Accessories",
//     condition: "New",
//     make: "Ludwig",
//     model: "P41",
//     price: 7.50,
//   },
//   {
//     id: 12,
//     user_id: 4,
//     title: "New Roland AX-Edge Keytar",
//     image: "https://media.guitarcenter.com/is/image/MMGS7/L42549000001000-00-720x720.jpg",
//     description: "Brand new Roland Keytar, black with red trim, all black keys. 49 keys",
//     qty: 1,
//     category: "Keyboards & Synths",
//     condition: "New",
//     make: "Roland",
//     model: "AX-Edge",
//     price: 1199.00,
//   }
]

const itemsReducer = (state=initialState, action) => {
  switch(action.type) {
    case "LOAD_ITEMS":
      return {
        ...state,
        items: action.payload
      }
    case "ADD_ITEM":
      return [...state, action.payload ]
    
    // case "":
    //   return []
    
    default:
      return state;
  }
}

export default itemsReducer;