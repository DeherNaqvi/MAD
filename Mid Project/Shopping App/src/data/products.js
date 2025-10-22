// src/data/products.js

// ---------------------- CATEGORY DATA ----------------------
// The 'categories' array contains a list of all product categories.
// Each category has an id, title, and an image (stored locally using 'require').
export const categories = [
  // Category for winter clothing items
  { id: 'winter', title: 'Winter', image: require('../../assets/images/winter1.webp') },

  // Category for summer clothing items
  { id: 'summer', title: 'Summer', image: require('../../assets/images/summer1.webp') },

  // Category for perfumes and fragrances
  { id: 'perfume', title: 'Perfumes', image: require('../../assets/images/perfume.jpg') },

  // Category for discounted or promotional products
  { id: 'sale', title: 'Sale', image: require('../../assets/images/sale.jpg') },
];


// ---------------------- PRODUCT DATA ----------------------
// The 'products' array stores all individual product details.
// Each product object includes properties such as:
// id, title, price, category, image, gender (optional), and sale status.
export const products = [
  {
    id: 'p1',                                  // Unique product identifier
    title: 'Winter Coat Pret',                 // Product name
    price: 85,                                 // Product price in Rs.
    category: 'winter',                        // Category link (matches category id)
    image: require('../../assets/images/w1.jpg'), // Local image path
    onSale: false                              // Boolean indicating if product is on sale
  },
  {
    id: 'p2',
    title: 'Unstitched Winter Lawn',
    price: 45,
    category: 'winter',
    image: require('../../assets/images/w2.webp'),
    onSale: true                               // This product is currently on sale
  },
  {
    id: 'p3',
    title: 'Summer Kurta Pret',
    price: 35,
    category: 'summer',
    image: require('../../assets/images/s1.webp'),
    onSale: false
  },
  {
    id: 'p4',
    title: 'Unstitched Summer Lawn',
    price: 30,
    category: 'summer',
    image: require('../../assets/images/s2.jpg'),
    onSale: false
  },
  {
    id: 'p5',
    title: 'Men Fragrance',
    price: 25,
    category: 'perfume',
    image: require('../../assets/images/perfume_m.webp'),
    gender: 'men',                             // Indicates product is for men
    onSale: true
  },
  {
    id: 'p6',
    title: 'Women Fragrance',
    price: 28,
    category: 'perfume',
    image: require('../../assets/images/perfume_w.webp'),
    gender: 'women',                           // Indicates product is for women
    onSale: false
  },

  // More products can be added below following the same structure.
  // Example:
  // {
  //   id: 'p7',
  //   title: 'New Arrival Item',
  //   price: 40,
  //   category: 'sale',
  //   image: require('../../assets/images/sample.jpg'),
  //   onSale: true
  // },
];
