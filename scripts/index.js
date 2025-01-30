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

// P1-Q2. In index.js create an async function called testApiCalls to be used to test the getProducts method. Inside this function:
// - P2-Q2-req1. Add a try...catch statement so that you can catch any errors from the API request.
// - P2-Q2-req2. Within the try block, call await productApi.getProducts() to retrieve the list of products, storing the result in a variable called products Note: Since getProducts is an async method, you must await this method call.
// - P2-Q2-req3. Also within the try block, validate the products were retrieved successfully by logging the products variable to the console.
// - P2-Q2-req4. Within the catch block, log any errors from the API request using console.error

async function testApiCalls() {
  try {
    const products = await productApi.getProducts();
    console.log("productApi.getProducts()", products);
  } catch (error) {
    console.log("error with getProducts!", error);
    // Access to XMLHttpRequest at 'https://bstn-api-lab-f060f124aa11.herokuapp.com/?apiKey=c3d5a444-ce56-4c94-88b1-cc5687c101c3' from origin 'http://127.0.0.1:5501' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
  }
}

// P2-Q3. Call the testApiCalls function to test the getProducts method is working correctly.
// - Determine if the getProducts method returns what you expect. If not, try to investigate where things could be going wrong and remember to ask for help if you get stuck.
testApiCalls();
