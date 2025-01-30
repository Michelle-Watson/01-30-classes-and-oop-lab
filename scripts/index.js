// Went into postman and sent a GET request to: https://bstn-api-lab-f060f124aa11.herokuapp.com/register
// P1-Q2. In index.js, create a variable called API_KEY that will store an API Key as a string.
// - P1-Q2-req1. Register an API key by calling the /register endpoint from the browser or postman.
// - P1-Q2-req2. Copy the API key returned from the call to /register and assign it to the API_KEY variable.
const API_KEY = "d8589041-a7e4-4daa-a40f-a1f8bba48eb2";

// P1-Q3. In index.js create an instance of the ProductApi class and assign it to a variable called productApi.
// - P1-Q3-req1. Make sure to pass the API_KEY variable to the constructor.
// - P1-Q3-req2. Validate the newly created instance of ProductApi by logging the productApi variable to the console.
// - P1-Q3-note. Note: your HTML file includes the product-api.js script before index.js so the ProductApi class is available to your code in index.js.
// const api = require("./product-api");
const productApi = new ProductApi(API_KEY);
console.log("productApi instance", productApi);
