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

// 4. Sorting
// Sort the provinces alphabetically and log the result
const sortedProvinces = [...provinces].sort();
console.log(sortedProvinces);

// 5. Filtering Cape
// Filter out provinces containing "Cape" and log the count of remaining provinces
const filteredProvinces = provinces.filter(province => !province.includes("Cape"));
console.log(filteredProvinces.length);

// 6. Finding 'S'
// Create a boolean array indicating if each name contains the letter 'S'
const containsS = names.map(name => name.includes('S'));
console.log(containsS);

// 7. Creating Object Mapping
// Transform the names array into an object mapping names to their respective provinces
const provinceMapping = names.reduce((acc, name, index) => {
  acc[name] = provinces[index];
  return acc;
}, {});
console.log(provinceMapping);

// Advanced Exercises

// 1. Log Products
// Log the names of all products to the console
console.log(products.map(product => product.product));

// 2. Filter by Name Length
// Filter out products with names longer than 5 characters and log the result
const shortNamedProducts = products.filter(product => product.product.length <= 5);
console.log(shortNamedProducts);

// 3. Price Manipulation
// Filter out products without valid prices, convert string prices to numbers, and calculate the total price
const totalPrice = products
  .filter(product => String(product.price).trim() !== '') // Ensure the price is not empty
  .map(product => Number(product.price)) // Convert prices to numbers
  .reduce((acc, price) => acc + price, 0); // Sum all prices
console.log('Total Price of valid products:', totalPrice);

/