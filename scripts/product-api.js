// Instructions
////////////// Part 1: Create and Validate the API Wrapper Class
// P1-Q1. In product-api.js, declare a class called ProductApi
// Create a constructor method that accepts an API key as its only parameter (e.g. apiKey). Note: The API key will be used when making requests to the API (see addProduct and getProducts methods).
// - P1-Q1-req1. You must store the API key parameter (e.g. apiKey) in an instance property (e.g. this.apiKey).
// - P1-Q1-req2. You must also store the Product API's base URL in an instance property (e.g. this.baseUrl). Note: this will be set to a hard coded string as it will not be passed to the constructor as a parameter

class ProductApi {
  constructor(apiKey) {
    this.apiKey = apiKey;
    // Got url from:
    this.baseURL = "https://bstn-api-lab-f060f124aa11.herokuapp.com";
  }

  ////////////// Part 2: Create the Get Products functionality - Slide 19
  // P2-Q1. In product-api.js, create a getProducts method within the ProductApi class:
  // - P2-Q1-req1. Create an async method called getProducts that accepts no parameters and uses Axios to send a GET request to the /products endpoint of the provided Product API
  //      -- P2-Q1-req1-note. Remember to append the API key instance property (e.g. this.apiKey) to the endpoint URL's query string to authenticate the request. See the Product API documentation for more info.
  //      -- P2-Q1-note. Note: your HTML file includes the Axios script before product-api.js so the axios instance is available to your code in product-api.js.
  // - P2-Q1-req2. The getProducts method should await the request and return the products array from the response (Recall where the data stored in an Axios response object).

  async getProducts() {
    try {
      // From Oct 11 LEC
      const responses = await axios.get(
        `${this.baseURL}/products?api_key=${this.apiKey}`
      );
      return responses.data;
    } catch (error) {
      console.log("error with getProducts!");
    }
  }

  ////////////// Part 3: Create the Add Product functionality
  // P3-Q1. In product-api.js, create a addProduct method within the ProductApi class:
  // - P3-Q1-req1. Create an async method called addProduct that accepts a product object as its only parameter and sends a POST request with the product object to the /products endpoint of the provided Product API
  //      -- P3-Q1-note. Remember to append the API key instance property (e.g. this.apiKey) to the endpoint URL's query string to authenticate the request. See the Product API documentation for more info.
  // - P3-Q1-req2. The addProduct method should await the request and return the newly created product from the response.

  // Creates a new product
  async addProduct(product) {
    try {
      const responses = await axios.post(
        `${this.baseURL}/products?api_key=${this.apiKey}`,
        product
      );
      // Required Request Headers: Content-Type: application/json?
      // axios gives it to us for free, don't need to manually set it
      return responses.data;
    } catch (error) {
      console.log("error with addProduct!");
    }
  }

  // Diving Deeper
  // GET /products/:id
  // Fetch a single product by ID
  async getProductById(productId) {
    try {
      const response = await axios.get(
        `${this.baseURL}/products/${productId}?api_key=${this.apiKey}`
      );
      return response.data;
    } catch (error) {
      console.log("Error with getProductById!");
    }
  }

  // PUT /products/:id
  // Update an existing product (replace all fields)
  async updateProduct(productId, updatedProduct) {
    try {
      const response = await axios.put(
        `${this.baseURL}/products/${productId}?api_key=${this.apiKey}`,
        updatedProduct
      );
      return response.data;
    } catch (error) {
      console.log("Error with updateProduct!");
    }
  }

  // PATCH /products/:id
  // Update an existing product (replace all fields)
  // Partially update an existing product
  async patchProduct(productId, updatedFields) {
    try {
      const response = await axios.patch(
        `${this.baseURL}/products/${productId}?api_key=${this.apiKey}`,
        updatedFields
      );
      return response.data;
    } catch (error) {
      console.log("Error with patchProduct!");
    }
  }

  // DELETE /products/:id
  // Delete a product by ID
  async deleteProduct(productId) {
    try {
      const response = await axios.delete(
        `${this.baseURL}/products/${productId}?api_key=${this.apiKey}`
      );
      return response.status === 204
        ? "Product deleted successfully"
        : "Failed to delete product";
    } catch (error) {
      console.log("Error with deleteProduct!");
    }
  }
}
