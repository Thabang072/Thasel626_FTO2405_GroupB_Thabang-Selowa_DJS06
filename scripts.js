// Data Sets
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State'];
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie'];
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' }, // Empty price
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' }, // Empty price
];

// 1. ForEach Basics
// Log each province to the console
provinces.forEach(province => console.log(province));
// Log each name to the console
names.forEach(name => console.log(name));
// Log each name along with its corresponding province
names.forEach((name, index) => console.log(`${name} (${provinces[index]})`));

