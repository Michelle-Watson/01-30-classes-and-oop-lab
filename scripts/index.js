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

// Function to test GET /products
async function testGetProducts() {
  try {
    const products = await productApi.getProducts();
    console.log("productApi.getProducts()", products);
  } catch (error) {
    console.error("Error with getProducts:", error);
  }
}

// P3-Q2. In index.js update the testApiCalls function body to test the addProduct method:
// - P3-Q2-req1. Add a new try...catch statement so that you can catch any errors from the API request.
// - P3-Q2-req2. Within the new try block, call await productApi.addProduct(<new_product_object>) to add a product to the list of products.
//      -- See the API documentation for the object structure to follow for the new product object.
// - P3-Q2-req3. Also within the new try block, verify the product has been added:
//      -- P3-Q1-req3i. Call await productApi.getProducts() after the addProduct call to retrieve the updated list of products, storing the result in a variable called newProducts
//      -- P3-Q1-req3ii. Validate the products were retrieved successfully by logging to the console the newProducts variable
//      -- P3-Q1-req3iii. Compare the products and newProducts variables in the console, noting the newProducts variable has the newly created product
// - P3-Q2-req4. Within the catch block, log any errors from the API request using console.error

// Function to test POST /products (add a new product)
async function testAddProduct() {
  try {
    const newProduct = {
      name: "Book",
      price: 22.99,
      category: "Entertainment",
    };
    const addedProduct = await productApi.addProduct(newProduct);
    console.log("productApi.addProduct() - Added product:", addedProduct);

    return addedProduct.id; // Return the ID of the newly added product for further testing
  } catch (error) {
    console.error("Error with addProduct:", error);
  }
}

// Function to test GET /products/:id (get product by ID)
async function testGetProductById(productId) {
  try {
    const product = await productApi.getProductById(productId);
    console.log("productApi.getProductById()", product);
  } catch (error) {
    console.error("Error with getProductById:", error);
  }
}

// Function to test PUT /products/:id (update product by ID)
async function testUpdateProduct(productId) {
  try {
    const updatedProduct = {
      name: "Updated Book",
      price: 29.99,
      category: "Entertainment",
    };
    const updatedProductResult = await productApi.updateProduct(
      productId,
      updatedProduct
    );
    console.log("productApi.updateProduct()", updatedProductResult);
  } catch (error) {
    console.error("Error with updateProduct:", error);
  }
}

// Function to test PATCH /products/:id (partially update product by ID)
async function testPatchProduct(productId) {
  try {
    const patchData = {
      price: 19.99, // Let's change the price
    };
    const patchedProduct = await productApi.patchProduct(productId, patchData);
    console.log("productApi.patchProduct()", patchedProduct);
  } catch (error) {
    console.error("Error with patchProduct:", error);
  }
}

// Function to test DELETE /products/:id (delete product by ID)
async function testDeleteProduct(productId) {
  try {
    const deleteResponse = await productApi.deleteProduct(productId);
    console.log("productApi.deleteProduct() Response:", deleteResponse);

    // Verify that the product was deleted by trying to fetch it again
    const deletedProduct = await productApi.getProductById(productId);
    console.log("productApi.getProductById() after delete:", deletedProduct);
  } catch (error) {
    console.error("Error with deleteProduct:", error);
  }
}

// Main function to call all the test functions in sequence
async function testApiCalls() {
  // Test GET /products
  await testGetProducts();

  // Test POST /products and get the ID of the added product
  const productId = await testAddProduct();

  // Test GET /products/:id (get the product we just added)
  await testGetProductById(productId);

  // Test PUT /products/:id (update the product we added)
  await testUpdateProduct(productId);

  // Test PATCH /products/:id (partially update the product)
  await testPatchProduct(productId);

  // Test DELETE /products/:id (delete the product we added)
  await testDeleteProduct(productId);
}

// P2-Q3. Call the testApiCalls function to test the getProducts method is working correctly.
// - Determine if the getProducts method returns what you expect. If not, try to investigate where things could be going wrong and remember to ask for help if you get stuck.
// Call the main test function to execute the tests
testApiCalls();
