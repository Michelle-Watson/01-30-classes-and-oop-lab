# Lab: Classes & Object-Oriented Programming

## Overview

In this lab, we are going to get some practice with JavaScript classes by creating a class to communicate with a Products API (documented [here](https://bstn-api-lab-f060f124aa11.herokuapp.com/)).

- HTTP-based Web APIs are developed, documented, and shared to allow programmers to make use of their functionality in any programming language.
- Language-specific API wrappers are commonly created to further abstract those HTTP-based APIs in order to provide code in a specific programming language, such as JavaScript.

Our goal in this lab is to create a JavaScript API that other developers could use to access the Products API without having to think about the underlying web requests.

## Getting Started

To get started, please [download the starter code](./starter/).

## Instructions

### Part 1: Create and Validate the API Wrapper Class

1. In `product-api.js`, declare a class called `ProductApi`.

- Create a `constructor` method that accepts an API key as its only parameter (e.g. `apiKey`).
  _Note: The API key will be used when making requests to the API (see `addProduct` and `getProducts` methods)._

- You must store the API key parameter (e.g. `apiKey`) in an instance property (e.g. `this.apiKey`).
- You must also store the Product API's base URL in an instance property (e.g. `this.baseUrl`).
  _Note: this will be set to a hardcoded string as it will not be passed to the `constructor` as a parameter._

2. In `index.js`, create a variable called `API_KEY` that will store an API Key as a string.

- Register an API key by calling the `/register` endpoint from the browser or postman.
- Copy the API key returned from the call to `/register` and assign it to the `API_KEY` variable.

3. In `index.js`, create an instance of the `ProductApi` class and assign it to a variable called `productApi`.

- Make sure to pass the `API_KEY` variable to the constructor.
- Validate the newly created instance of `ProductApi` by logging the `productApi` variable to the console.
  _Note: your HTML file includes the `product-api.js` script before `index.js` so the `ProductApi` class is available to your code in `index.js`._

### Part 2: Create the Get Products functionality

1. In `product-api.js`, create a `getProducts` method within the `ProductApi` class:

- Create an `async` method called `getProducts` that accepts no parameters and uses Axios to send a GET request to the `/products` endpoint of the provided Product API.

  - Remember to append the API key instance property (e.g. `this.apiKey`) to the endpoint URL's query string to authenticate the request. See the Product API documentation for more info.
    _Note: your HTML file includes the Axios script before `product-api.js` so the `axios` instance is available to your code in `product-api.js`._

- The `getProducts` method should `await` the request and return the products array from the response (Recall where the data is stored in an Axios response object).

2. In `index.js`, create an `async` function called `testApiCalls` to be used to test the `getProducts` method. Inside this function:

- Add a `try...catch` statement so that you can catch any errors from the API request.
- Within the `try` block, call `await productApi.getProducts()` to retrieve the list of products, storing the result in a variable called `products`.
  _Note: Since `getProducts` is an `async` method, you must `await` this method call._
- Also within the `try` block, validate the products were retrieved successfully by logging the `products` variable to the console.
- Within the `catch` block, log any errors from the API request using `console.error`.

3. Call the `testApiCalls` function to test that the `getProducts` method is working correctly.

- Determine if the `getProducts` method returns what you expect. If not, try to investigate where things could be going wrong and remember to ask for help if you get stuck.

### Part 3: Create the Add Product functionality

1. In `product-api.js`, create an `addProduct` method within the `ProductApi` class:

- Create an `async` method called `addProduct` that accepts a product object as its only parameter and sends a POST request with the product object to the `/products` endpoint of the provided Product API.

  - Remember to append the API key instance property (e.g. `this.apiKey`) to the endpoint URL's query string to authenticate the request. See the Product API documentation for more info.

- The `addProduct` method should `await` the request and return the newly created product from the response.

2. In `index.js`, update the `testApiCalls` function body to test the `addProduct` method:

- Add a new `try...catch` statement so that you can catch any errors from the API request.
- Within the new `try` block, call `await productApi.addProduct(<new_product_object>)` to add a product to the list of products.
  - See the API documentation for the object structure to follow for the new product object.
- Also within the new `try` block, verify the product has been added:
  - Call `await productApi.getProducts()` after the `addProduct` call to retrieve the updated list of products, storing the result in a variable called `newProducts`.
  - Validate the products were retrieved successfully by logging to the console the `newProducts` variable.
  - Compare the `products` and `newProducts` variables in the console, noting that the `newProducts` variable has the newly created product.
- Within the `catch` block, log any errors from the API request using `console.error`.

### Diving Deeper

Continue adding methods to the `ProductApi` class for the following API endpoints, testing each method as you create them:

- `GET /products/:id`
- `PUT /products/:id`
- `PATCH /products/:id`
- `DELETE /products/:id`

## Resources

- [MDN: JavaScript Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [Axios Documentation](https://axios-http.com/docs/api_intro)

---

# Product API Documentation

## Overview

- The url for the API is `https://bstn-api-lab-f060f124aa11.herokuapp.com/`
- On the `/products` route, the products array contains three default products
- **Note:** This API has a temporary memory. Occasionally the API will reset removing all stored products (except for the three default products)
- Documentation was converted from [html](https://bstn-api-lab-f060f124aa11.herokuapp.com/) to markdown using https://htmlmarkdown.com/

---

## Authentication

- To register with the API and get a key, make a GET request to `/register`
  - You can do this with the browser and you only need to do it once. Store the key in a global variable in your website.
- You must append `?api_key=<your_api_key_here>` to each of your API request URLs (except for `/register`)

## Routes

### `GET /register`

- Returns an object containing a unique API key

#### Response Body Example

```
  {
      "api_key": "e0eea5f0-0f8c-4b54-9fc4-ff50843766d4"
  }

```

---

### `GET /products`

- Returns an array of products
- Products may be regularly cleared by the server

#### Response Body Example

```
  [
    {
      "name": "Smartphone",
      "category": "Electronics",
      "price": 599.99,
      "id": "3d3b63fa-a78d-468a-a50f-57429984dd99",
    }
  ]
```

---

### `GET /products/:id`

- Returns a single product specified by `:id`
  - Swap `:id` for the id of the product you want to retrieve
- Will return a 200 status code if successful, along with the `product` JSON object
- Will return a 404 error code if the product is not found
- Example: `/products/3d3b63fa-a78d-468a-a50f-57429984dd99`

#### Response Body Example

```
  [
    {
      "name": "Smartphone",
      "category": "Electronics",
      "price": 599.99,
      "id": "3d3b63fa-a78d-468a-a50f-57429984dd99",
    }
  ]
```

---

### `POST /products`

- Creates a new product
- Will return a 201 status code if successful, along with the `product` JSON object that was created
- Will return a 400 error code if `name`, `price`, or `category` are not included

#### Required Request Headers

`Content-Type: application/json`

#### POST Body Example

```
  {
    "name": "Book",
    "price": 14.99,
    "category": "Entertainment"
  }

```

#### Response Body Example

```
  {
    "name": "Book",
    "price": 14.99,
    "category": "Entertainment",
    "id": "3d3b63fa-a78d-468a-a50f-57429984dd99"
  }

```

---

### `PATCH /products/:id`

- Partially updates an existing product specified by `:id`
  - Swap `:id` for the id of the product you want to update
  - Only include the fields you want to update
- Will return a 200 status code if successful, along with the `product` JSON object that was updated
- Will return a 400 error code if there are no updatable properties included: `name`, `price`, or `category`
- Example: `/products/3d3b63fa-a78d-468a-a50f-57429984dd99`

#### Required Request Headers

`Content-Type: application/json`

#### PATCH Body Example

```
  {
      "price": 299.99,
      "category": "Mobile Phones"
  }

```

#### Response Body Example

```
  {
    "name": "Smartphone",
    "category": "Mobile Phones",
    "price": 299.99,
    "id": "3d3b63fa-a78d-468a-a50f-57429984dd99",
  }

```

---

### `PUT /products/:id`

- Overwrites an existing product specified by `:id`
  - Swap `:id` for the id of the product you want to update
  - All fields must be included
- Will return a 200 status code if successful, along with the `product` JSON object that was updated
- Will return a 400 error code if any updatable property is missing: `name`, `price`, or `category`
- Example: `/products/3d3b63fa-a78d-468a-a50f-57429984dd99`

#### Required Request Headers

`Content-Type: application/json`

#### PATCH Body Example

```
  {

      "name": "Flip Phone",
      "price": 99.99,
      "category": "Mobile Phones"
  }

```

#### Response Body Example

```
  {
    "name": "Flip Phone",
    "category": "Mobile Phones",
    "price": 99.99,
    "id": "3d3b63fa-a78d-468a-a50f-57429984dd99",
  }

```

---

### `DELETE /products/:id`

- Deletes the product specified by `:id`.
  - Swap `:id` for the id of the product you want to delete
- Will return a 204 status code if successful, indicating there is no content with that id
- Will return a 404 error code if the product is not found
- Example: `/products/3d3b63fa-a78d-468a-a50f-57429984dd99`

#### Response Body Example

```
(Empty Response)
```
