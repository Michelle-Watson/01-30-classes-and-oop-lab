# Lab: Classes & Object-Oriented Programming

<article><div class="markdown--TOg2r body--vb2Ya"><h2>Overview</h2>
<p>In this lab we are going to get some practice with JavaScript classes by creating a class to communicate with a Products API (<a href="https://bstn-api-lab-f060f124aa11.herokuapp.com/" target="_blank" rel="noopener noreferrer">documented here</a>).</p>
<ul>
<li>
<p>HTTP-based Web APIs are developed, documented, and shared to allow programmers to make use of their functionality in any programming language.</p>
</li>
<li>
<p>Language-specific API wrappers are commonly created to further abstract those HTTP-based APIs in order to provide code in a specific programming language, such as JavaScript.</p>
</li>
</ul>
<p>Our goal in this lab is to create a JavaScript API that other developers could use to access the Products API without having to think about the underlying web requests.</p>
<h2>Getting Started</h2>
<p>To get started, please <a href="https://api.brainstation.io/content/link/10qwHKVBKda_TGkrltze2udFMli65t4Od?instanceId=7382" target="_blank" rel="noopener noreferrer">download the starter code</a>.</p>
<h2>Instructions</h2>
<h3>Part 1: Create and Validate the API Wrapper Class</h3>
<ol>
<li>In <code>product-api.js</code>, declare a class called <code>ProductApi</code></li>
</ol>
<ul>
<li>Create a <code>constructor</code> method that accepts an API key as its only parameter (e.g. <code>apiKey</code>). <em>Note: The API key will be used when making requests to the API (see <code>addProduct</code> and <code>getProducts</code> methods).</em></li>
<li>You must store the API key parameter (e.g. <code>apiKey</code>) in an instance property (e.g. <code>this.apiKey</code>).</li>
<li>You must also store the Product API's base URL in an instance property (e.g. <code>this.baseUrl</code>). <em>Note: this will be set to a hard coded string as it will not be passed to the <code>constructor</code> as a parameter</em></li>
</ul>
<ol start="2">
<li>In <code>index.js</code>, create a variable called <code>API_KEY</code> that will store an API Key as a string.</li>
</ol>
<ul>
<li>Register an API key by calling the <code>/register</code> endpoint from the browser or postman.</li>
<li>Copy the API key returned from the call to <code>/register</code> and assign it to the <code>API_KEY</code> variable.</li>
</ul>
<ol start="3">
<li>In <code>index.js</code> create an instance of the <code>ProductApi</code> class and assign it to a variable called <code>productApi</code>.</li>
</ol>
<ul>
<li>Make sure to pass the <code>API_KEY</code> variable to the constructor.</li>
<li>Validate the newly created instance of <code>ProductApi</code> by logging  the <code>productApi</code> variable to the console.</li>
<li><em>Note: your HTML file includes the <code>product-api.js</code> script before <code>index.js</code> so the <code>ProductApi</code> class is available to your code in <code>index.js</code>.</em></li>
</ul>
<h3>Part 2: Create the Get Products functionality</h3>
<ol>
<li>In <code>product-api.js</code>, create a <code>getProducts</code> method within the <code>ProductApi</code> class:</li>
</ol>
<ul>
<li>Create an <code>async</code> method called <code>getProducts</code> that accepts no parameters and uses Axios to send a GET request to the <code>/products</code> endpoint of the provided Product API
<ul>
<li>Remember to append the API key instance property (e.g. <code>this.apiKey</code>) to the endpoint URL's query string to authenticate the request. See the Product API documentation for more info.</li>
<li><em>Note: your HTML file includes the Axios script before <code>product-api.js</code> so the <code>axios</code> instance is available to your code in <code>product-api.js</code>.</em></li>
</ul>
</li>
<li>The <code>getProducts</code> method should <code>await</code> the request and return the products array from the response (Recall where the data stored in an Axios response object).</li>
</ul>
<ol start="2">
<li>In <code>index.js</code> create an <code>async</code> function called <code>testApiCalls</code> to be used to test the <code>getProducts</code> method. Inside this function:</li>
</ol>
<ul>
<li>Add a <code>try...catch</code> statement so that you can catch any errors from the API request.</li>
<li>Within the <code>try</code> block, call <code>await productApi.getProducts()</code> to retrieve the list of products, storing the result in a variable called <code>products</code> <em>Note: Since <code>getProducts</code> is an <code>async</code> method, you must <code>await</code> this method call.</em></li>
<li>Also within the <code>try</code> block, validate the products were retrieved successfully by logging the <code>products</code> variable to the console.</li>
<li>Within the <code>catch</code> block, log any errors from the API request using <code>console.error</code></li>
</ul>
<ol start="3">
<li>Call the <code>testApiCalls</code> function to test the <code>getProducts</code> method is working correctly.</li>
</ol>
<ul>
<li>Determine if the <code>getProducts</code> method returns what you expect.  If not, try to investigate where things could be going wrong and remember to ask for help if you get stuck.</li>
</ul>
<h3>Part 3: Create the Add Product functionality</h3>
<ol>
<li>In <code>product-api.js</code>, create a <code>addProduct</code> method within the <code>ProductApi</code> class:</li>
</ol>
<ul>
<li>Create an <code>async</code> method called <code>addProduct</code> that accepts a product object as its only parameter and sends a POST request with the product object to the <code>/products</code> endpoint of the provided Product API
<ul>
<li>Remember to append the API key instance property (e.g. <code>this.apiKey</code>) to the endpoint URL's query string to authenticate the request. See the Product API documentation for more info.</li>
</ul>
</li>
<li>The <code>addProduct</code> method should <code>await</code> the request and return the newly created product from the response.</li>
</ul>
<ol start="2">
<li>In <code>index.js</code> update the <code>testApiCalls</code> function body to test the <code>addProduct</code> method:</li>
</ol>
<ul>
<li>
<p>Add a new <code>try...catch</code> statement so that you can catch any errors from the API request.</p>
</li>
<li>
<p>Within the new <code>try</code> block, call <code>await productApi.addProduct(&lt;new_product_object&gt;)</code> to add a product to the list of products.</p>
<ul>
<li>See the API documentation for the object structure to follow for the new product object.</li>
</ul>
</li>
<li>
<p>Also within the new <code>try</code> block, verify the product has been added:</p>
<ul>
<li>Call <code>await productApi.getProducts()</code> after the <code>addProduct</code> call to retrieve the updated list of products, storing the result in a variable called <code>newProducts</code></li>
<li>Validate the products were retrieved successfully by logging to the console the <code>newProducts</code> variable</li>
<li>Compare the <code>products</code> and <code>newProducts</code> variables in the console, noting the <code>newProducts</code> variable has the newly created product</li>
</ul>
</li>
<li>
<p>Within the <code>catch</code> block, log any errors from the API request using <code>console.error</code></p>
</li>
</ul>
<h3>Diving Deeper</h3>
<ol>
<li>Continue adding methods to the <code>ProductApi</code> class for the following API endpoints, testing each method as you create them:</li>
</ol>
<ul>
<li><code>GET /products/:id</code></li>
<li><code>PUT /products/:id</code></li>
<li><code>PATCH /products/:id</code></li>
<li><code>DELETE /products/:id</code></li>
</ul>
<h2>Resources</h2>
<ul>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes" target="_blank" rel="noopener noreferrer">MDN: JavaScript Classes</a></li>
<li><a href="https://axios-http.com/docs/api_intro" target="_blank" rel="noopener noreferrer">Axios Documentation</a></li>
</ul>
</div></article>

<body class="vsc-initialized">
  <h2>Product API Documentation</h2>
  <section>
    <h2>Overview</h2>
    <ul>
      <li>The url for the API is <code>https://bstn-api-lab-f060f124aa11.herokuapp.com/</code></li>
      <li>On the <code>/products</code> route, the products array contains three default products</li>
      <li><strong>Note:</strong> This API has a temporary memory. Occasionally the API will reset removing all stored
        products (except for the three default products)</li>
    </ul>
    <hr>
    <h2>Authentication</h2>
    <ul>
      <li>To register with the API and get a key, make a GET request to <code>/register</code>
        <ul>
          <li>You can do this with the browser and you only need to do it once. Store the key in a global variable in
            your
            website.</li>
        </ul>
      </li>
      <li>You must append <code>?api_key=&lt;your_api_key_here&gt;</code> to each of your API request URLs (except for
        <code>/register</code>)
      </li>
    </ul>
  </section>
  <section>
    <h2>Routes</h2>
    <h3><code>GET /register</code></h3>
    <ul>
      <li>Returns an object containing a unique API key</li>
    </ul>
    <h4>Response Body Example</h4>
    <pre><code class="lang-json">  {
      <span class="hljs-attr">"api_key"</span>: <span class="hljs-string">"e0eea5f0-0f8c-4b54-9fc4-ff50843766d4"</span>
  }
  </code></pre>
    <hr>
    <h3><code>GET /products</code></h3>
    <ul>
      <li>Returns an array of products</li>
      <li>Products may be regularly cleared by the server</li>
    </ul>
    <h4>Response Body Example</h4>
    <pre><code class="lang-json">  [
    {
      <span class="hljs-attr">"name"</span>: <span class="hljs-string">"Smartphone"</span>,
      <span class="hljs-attr">"category"</span>: <span class="hljs-string">"Electronics"</span>,
      <span class="hljs-attr">"price"</span>: <span class="hljs-string">599.99</span>,
      <span class="hljs-attr">"id"</span>: <span class="hljs-number">"3d3b63fa-a78d-468a-a50f-57429984dd99"</span>,
    }
  ]</code></pre>

  <hr>
    <h3><code>GET /products/:id</code></h3>
    <ul>
      <li>
        Returns a single product specified by <code>:id</code>
        <ul><li>Swap <code>:id</code> for the id of the product you want to retrieve</li></ul>
      </li>
      <li>Will return a 200 status code if successful, along with the <code>product</code> JSON object</li>
      <li>Will return a 404 error code if the product is not found</li>
      <li>Example: <code>/products/3d3b63fa-a78d-468a-a50f-57429984dd99</code></li>
    </ul>
    <h4>Response Body Example</h4>
    <pre><code class="lang-json">  [
    {
      <span class="hljs-attr">"name"</span>: <span class="hljs-string">"Smartphone"</span>,
      <span class="hljs-attr">"category"</span>: <span class="hljs-string">"Electronics"</span>,
      <span class="hljs-attr">"price"</span>: <span class="hljs-string">599.99</span>,
      <span class="hljs-attr">"id"</span>: <span class="hljs-number">"3d3b63fa-a78d-468a-a50f-57429984dd99"</span>,
    }
  ]</code></pre>

    <hr>
    <h3><code>POST /products</code></h3>
    <ul>
      <li>Creates a new product</li>
      <li>Will return a 201 status code if successful, along with the <code>product</code> JSON object that was created</li>
      <li>Will return a 400 error code if <code>name</code>, <code>price</code>, or <code>category</code> are not included</li>
    </ul>
    <h4>Required Request Headers</h4>
    <p><code>Content-Type: application/json</code></p>
    <h4>POST Body Example</h4>
    <pre><code class="lang-json">  {
    <span class="hljs-attr">"name"</span>: <span class="hljs-string">"Book"</span>,
    <span class="hljs-attr">"price"</span>: <span class="hljs-string">14.99</span>,
    <span class="hljs-attr">"category"</span>: <span class="hljs-string">"Entertainment"</span>

}
</code></pre>

<h4>Response Body Example</h4>
<pre><code class="lang-json"> {
<span class="hljs-attr">"name"</span>: <span class="hljs-string">"Book"</span>,
<span class="hljs-attr">"price"</span>: <span class="hljs-string">14.99</span>,
<span class="hljs-attr">"category"</span>: <span class="hljs-string">"Entertainment"</span>,
<span class="hljs-attr">"id"</span>: <span class="hljs-number">"3d3b63fa-a78d-468a-a50f-57429984dd99"</span>
}
</code></pre>

  <hr>
    <h3><code>PATCH /products/:id</code></h3>
    <ul>
      <li>Partially updates an existing product specified by <code>:id</code>
        <ul>
          <li>Swap <code>:id</code> for the id of the product you want to update</li>
          <li>Only include the fields you want to update</li>
        </ul>
      </li>
      <li>Will return a 200 status code if successful, along with the <code>product</code> JSON object that was updated</li>
      <li>Will return a 400 error code if there are no updatable properties included: <code>name</code>, <code>price</code>, or <code>category</code></li>
      <li>Example: <code>/products/3d3b63fa-a78d-468a-a50f-57429984dd99</code></li>
    </ul>
    <h4>Required Request Headers</h4>
    <p><code>Content-Type: application/json</code></p>
    <h4>PATCH Body Example</h4>
    <pre><code class="lang-json">  {
      <span class="hljs-attr">"price"</span>: <span class="hljs-string">299.99</span>,
      <span class="hljs-attr">"category"</span>: <span class="hljs-string">"Mobile Phones"</span>
  }
  </code></pre>
    <h4>Response Body Example</h4>
    <pre><code class="lang-json">  {
    <span class="hljs-attr">"name"</span>: <span class="hljs-string">"Smartphone"</span>,
    <span class="hljs-attr">"category"</span>: <span class="hljs-string">"Mobile Phones"</span>,
    <span class="hljs-attr">"price"</span>: <span class="hljs-string">299.99</span>,
    <span class="hljs-attr">"id"</span>: <span class="hljs-number">"3d3b63fa-a78d-468a-a50f-57429984dd99"</span>,
  }
  </code></pre>

  <hr>

  <h3><code>PUT /products/:id</code></h3>
    <ul>
      <li>Overwrites an existing product specified by <code>:id</code>
        <ul>
          <li>Swap <code>:id</code> for the id of the product you want to update</li>
          <li>All fields must be included</li>
        </ul>
      </li>
      <li>Will return a 200 status code if successful, along with the <code>product</code> JSON object that was updated</li>
      <li>Will return a 400 error code if any updatable property is missing: <code>name</code>, <code>price</code>, or <code>category</code></li>
      <li>Example: <code>/products/3d3b63fa-a78d-468a-a50f-57429984dd99</code></li>
    </ul>
    <h4>Required Request Headers</h4>
    <p><code>Content-Type: application/json</code></p>
    <h4>PATCH Body Example</h4>
    <pre><code class="lang-json">  {

      <span class="hljs-attr">"name"</span>: <span class="hljs-string">"Flip Phone"</span>,
      <span class="hljs-attr">"price"</span>: <span class="hljs-string">99.99</span>,
      <span class="hljs-attr">"category"</span>: <span class="hljs-string">"Mobile Phones"</span>

}
</code></pre>

<h4>Response Body Example</h4>
<pre><code class="lang-json"> {
<span class="hljs-attr">"name"</span>: <span class="hljs-string">"Flip Phone"</span>,
<span class="hljs-attr">"category"</span>: <span class="hljs-string">"Mobile Phones"</span>,
<span class="hljs-attr">"price"</span>: <span class="hljs-string">99.99</span>,
<span class="hljs-attr">"id"</span>: <span class="hljs-number">"3d3b63fa-a78d-468a-a50f-57429984dd99"</span>,
}
</code></pre>

  <hr>

  <h3><code>DELETE /products/:id</code></h3>
  <ul>
    <li>Deletes the product specified by <code>:id</code>. <ul>
        <li>Swap <code>:id</code> for the id of the product you want to delete</li>
      </ul>
    </li>
    <li>Will return a 204 status code if successful, indicating there is no content with that id</li>
    <li>Will return a 404 error code if the product is not found</li>
    <li>Example: <code>/products/3d3b63fa-a78d-468a-a50f-57429984dd99</code></li>
  </ul>
  <h4>Response Body Example</h4>
  <pre><code class="lang-json">(Empty Response)</code></pre>

</section>

<iframe id="SSlqtSbk" frameborder="0" src="chrome-extension://ekhagklcjbdpajgpjgmbionohlpdbjgc/translateSandbox/translateSandbox.html" style="width: 0px; height: 0px; display: none;"></iframe></body>
