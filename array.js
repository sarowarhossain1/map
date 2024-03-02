const daraz = [
  {
    category: "Sarees",
    name: "Fashionable Halfsilk Cutwork Saree For Women (All Colour",
    brand: "MOHADEB & CO",
    img: "https://static-01.daraz.com.bd/p/bf1a0ecb5d825c52094e8e18075fc27e.jpg_188x188.jpg_.webp",
    price: 530,
    color: "White",
    Ratings: 3.9,
  },
  {
    category: "Shalwar Kameez",
    name: "New Exclusive Designed Linen Screen Print Three Piece For Stylish Women",
    brand: "Nilima",
    img: "https://static-01.daraz.com.bd/p/08a01c6013d66815842cfb200131b1d6.jpg_300x0q75.webp",
    price: 59,
    color: "Red",
    Ratings: 3.8,
  },
  {
    category: "Unstitched Fabrice",
    name: "Unstitched Muslised Silk Salwar Kamiz (Made by Tant & Washable Colour )",
    brand: "MONI TRADERS",
    img: "https://static-01.daraz.com.bd/p/18dfe3e974efb72888e240fd9440a6ad.jpg_300x0q75.webp",
    price: 2294,
    color: "White",
    Ratings: 5,
  },
  {
    category: "Facial Cleansers",
    name: "BIOAQUA Black Mask Activated Carbon Charcoal Blackhead Removal Peel Off Mask Black Nose Nose Film And Oil-Control Depth Clean Pore 60g HZ20",
    brand: "LAIKOU",
    img: "https://static-01.daraz.com.bd/p/fbc6cdbb1bfc337613e93ba6942747fc.jpg_300x0q75.webp",
    price: 179,
    color: "White",
    Ratings: 4.0,
  },
  {
    category: "Men's T-Shirts",
    name: "Fabrilife Mens Premium Jacket - Solstice (Black)",
    brand: "Fabrilife",
    img: "https://static-01.daraz.com.bd/p/11c284019a5934d61e995fd84c5d11ab.jpg_300x0q75.webp",
    price: 1250,
    color: "black",
    Ratings: 4.4,
  },
  {
    category: "Mobiles",
    name: "iPhone 14 Pro Max 256GB (USA-LL/A) Smartphone",
    brand: "Vivo",
    img: "https://static-01.daraz.com.bd/p/a3bf76d00cc0d645cf73d0db5a251b04.jpg_300x0q75.webp",
    price: 166990,
    color: "Black",
    Ratings: 4.6,
  },
  {
    category: "Smart Televisions",
    name: "KD-43X75K | 4K Ultra HD | High Dynamic Range (HDR) | Smart TV (Google TV)",
    img: "https://static-01.daraz.com.bd/p/20456309d9a1a02c85c9143221acc08c.jpg_300x0q75.webp",
    brand: "Sony",
    price: 66833,
    color: "White",
    Ratings: 4.6,
  },
  {
    category: "Tablets",
    name: "Honor Pad 8 (Wi-Fi) Qualcomm Snapdragon 680 Octa-core Processor 12.0 Inch 2k Display 6GB RAM Blue Hour Tablet",
    brand: "Xiomi",
    img: "https://static-01.daraz.com.bd/p/a4df760ae57b569e9d165cddc3700f18.jpg_300x0q75.webp",
    price: 31500,
    color: "White",
    Ratings: 4,
  },
  {
    category: "Wireless Earbuds",
    name: "DM10 QKZ DM10 Zinc Alloy HiFi In Ear Earphones QKZ DM10 3.5mm Wired In-Ear Earphone",
    img: "https://static-01.daraz.com.bd/p/a6d62e961f1e3c051e6895f23724829d.jpg_300x0q75.webp",
    brand: "Lenovo",
    price: 175,
    color: "Black",
    Ratings: 4,
  },
  {
    category: "Home Gyms",
    name: "4kg Dumbbell Set - Navy Blue-1 Pair",
    brand: "Oma",
    img: "https://static-01.daraz.com.bd/p/1e866bb91a2797778b7606c14b693e39.jpg_300x0q75.webp",
    price: 1049,
    Ratings: 4.5,
  },
];

let disFun = daraz.map((item) => {
    if(item.brand=="Oma"){
        item.brand="Xiomi"
    }
    return item
});
// console.log(disFun);

let showFun = daraz.map((item =>{
       if(item.category=="Home Gyms"){
         item.color = "Blue"
       }
       return item
}))
console.log(showFun)





