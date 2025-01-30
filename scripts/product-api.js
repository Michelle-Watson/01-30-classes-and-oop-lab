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
}
