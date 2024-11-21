
# Convini AI endpoint for creating new bundles.

## Welcome to Convini's API endpoint where we get names, descriptions, and prices.

Start by sending a request to the endpoint to [https://convini-backend.vercel.app/api/create-bundle](https://convini-backend.vercel.app/api/create-bundle).

# Here are some things to consider when using this endpoint:

### 1. Only POST method is allowed.

The API only accepts POST requests. If you try to send a request with any other HTTP method, you will receive a `400 BAD REQUEST` response.

### 2. The type of the Input body

```javascript
type BodyType = {
  items: string[]
}
```

#### Make sure it's correct, otherwise you will get a `BAD REQUEST (400)` response.

The request body should contain an array of product EANs (European Article Numbers) in the `items` field. If the body does not follow the correct schema, the API will return a `400 BAD REQUEST` response.

Example request body:

```json
{
  "items": ["EAN1", "EAN2", "EAN3"]
}
```

### 3. Expected response

#### Success (200 OK)

When the request is successful, the API will return a JSON response with the generated bundle.  

Example response:

```json
{
  "bundle_name": "Energi och Fräschör",
  "bundle_description": "En uppfriskande mix av energi och smak! Få en kick med Red Bull, njut av den klassiska Coca-Cola och fräscha upp dig med en mango-aloe vera-dryck. Perfekt för en energifylld dag!",
  "bundle_categories": [
    "Energi",
    "Läsk"
  ],
  "price": 56.99
}
```

#### Error 400 (Bad Request)

If the request method is not POST, or the body does not follow the correct schema, the API will return a `400 BAD REQUEST` error. 

Example:

```json
{
  "error": "Only POST method allowed"
}
```

#### Error 404 (Not Found)

If no matching products are found based on the provided EANs, the API will return a `404 Not Found` error. 

Example:

```json
{
  "error": "No products match the input"
}
```

#### Error 500 (Internal Server Error)

If an error occurs while generating the bundle, the API will return a `500 Internal Server Error`. 

Example:

```json
{
  "error": "An error occurred when creating bundle. Please check Vercel logs."
}
```

## Dependencies

This project relies on the following npm packages:

- `@vercel/node`: Vercel-specific package for serverless functions.
- `zod`: A TypeScript-first schema declaration and validation library used for request validation.

## File Structure

```
/src
  /utils
    /openai
      createBundle.js  # Contains the logic to create the bundle
      types.js         # Defines the response body schema and types for the OpenAI API
    /product
      products.js      # Contains a list of available products
/api
  /create-bundle.js  # The Vercel serverless function endpoint
```

## How to Run Locally

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Install the dependencies:
   ```
   npm install
   ```

3. Run the Vercel project locally:
   ```
   vercel dev
   ```

4. The backend service will be available at `http://localhost:3000`.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
