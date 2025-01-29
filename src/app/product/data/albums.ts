export interface Album {
    product_name: string
    price: string
    saleprice?: string
    cover: string
  }
  
  // const aa="james-lewis-ohiyigDmlYc-unsplash";
  // const accesskey="wDyi0HxINGS1It9Q2h6ZRFObiShO55OiHQ8YA3XAfHM";
  // const secretkey="6T4yxdld2QYlyoD5cGvLDPdCScY2_z3s1s8aPRGAc3g";
  // const url="https://api.unsplash.com/photos/?client_id=wDyi0HxINGS1It9Q2h6ZRFObiShO55OiHQ8YA3XAfHM&query=floral+dress";
  export const listenNowAlbums: Album[] = [
      {
        product_name: "Summer Floral Dress",
        price: "₹3999",
        cover: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=300"
      },
      {
        product_name: "Chic Leather Handbag",
        price: "₹899",
        cover: "https://images.unsplash.com/photo-1600857062241-98e5dba7f214?w=300"
      },
      {
        product_name: "Lace Evening Gown",
        price: "₹2499",
        cover: "https://plus.unsplash.com/premium_photo-1676234842565-bc1df0bfd45a?w=300"
      },
      {
        product_name: "Stylish Wide-Brim Hat",
        price: "₹1799",
        cover: "https://plus.unsplash.com/premium_photo-1671571592084-1fef547e09b5?w=300"
      },
      {
        product_name: "Designer Sunglasses",
        price: "₹1999",
        cover: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=300"
      },
      {
        product_name: "Cashmere Sweater",
        price: "₹2999",
        // cover: "https://images.unsplash.com/photo-1595354430528-7f0bb2ff2c3e?w=300&dpr=2&q=80"
        cover: "https://images.unsplash.com/photo-1624378407998-48becabd8c27?w=300"
      },
      {
        product_name: "High-Waisted Jeans",
        price: "₹1399",
        cover: "https://images.unsplash.com/photo-1547227818-2d544e6ec56b?w=300"
      },
      {
        product_name: "Classic Leather Boots",
        price: "₹1199",
        cover: "https://images.unsplash.com/photo-1605733160314-4fc7dac4bb16?w=300"
      },
      {
        product_name: "Floral Print Scarf",
        price: "₹799",
        cover: "https://images.unsplash.com/photo-1601244005535-a48d21d951ac?w=300"
      },
      {
        product_name: "Chunky Knit Sweater",
        price: "₹1199",
        cover: "https://images.unsplash.com/photo-1631541911232-72bc7448820a?w=300"
      }
  ]
  
  export const madeForYouAlbums: Album[] = [
    {
      product_name: "Designer Sunglasses",
      price: "₹1999",
      saleprice: "₹1499",
      cover: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=300"
    },
    {
      product_name: "High-Waisted Jeans",
      price: "₹1399",
      saleprice: "₹999",
      cover: "https://images.unsplash.com/photo-1547227818-2d544e6ec56b?w=300"
    },
    {
      product_name: "Classic Leather Boots",
      price: "₹1199",
      saleprice: "₹899",
      cover: "https://images.unsplash.com/photo-1605733160314-4fc7dac4bb16?w=300"
    },
    {
      product_name: "Summer Floral Dress",
      price: "₹3999",
      saleprice: "₹2999",
      cover: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=300"
    },
    {
      product_name: "Lace Evening Gown",
      price: "₹2499",
      saleprice: "₹1999",
      cover: "https://plus.unsplash.com/premium_photo-1676234842565-bc1df0bfd45a?w=300"
    },
  ]