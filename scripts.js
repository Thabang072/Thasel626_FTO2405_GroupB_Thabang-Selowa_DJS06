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

// 2. Uppercase Transformation
// Create a new array with province names in uppercase
const uppercaseProvinces = provinces.map(province => province.toUpperCase());
console.log(uppercaseProvinces);

// 3. Name Lengths
// Create a new array containing the length of each name
const nameLengths = names.map(name => name.length);
console.log(nameLengths);
