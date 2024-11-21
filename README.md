Convini AI Endpoint for Creating New Bundles
Welcome to Convini's API! This API helps you create bundles of products with a generated name, description, and price. Below is the documentation on how to use the API to create product bundles. You will find detailed information on the request format, endpoint, and response structure.

Table of Contents
Overview
Endpoint
Request Method
Request Body
Response Structure
Error Handling
Example Request
Example Response
Additional Notes
Overview
Convini's API allows you to create bundles from a set of product items. Once you provide the list of product EANs (European Article Numbers), the API generates a bundle with a name, description, and price based on the items.

Endpoint
The API endpoint for creating a new bundle is:

arduino
Copy code
POST https://convini-backend.vercel.app/api/create-bundle-name
Allowed Method
POST: This is the only supported method for making a request to this endpoint.
Request Method
HTTP Method: POST
This endpoint only accepts POST requests. If a request is made using any other method (such as GET), the server will return a 400 BAD REQUEST response.

Request Body
The request body should be in JSON format and must follow this schema:

javascript
Copy code
{
  "items": [
    "ean1", 
    "ean2", 
    "ean3"
  ]
}
Where:

items: An array of product EANs (strings) that you want to include in the bundle. Each item in the array should correspond to a valid product.
Example of valid input:
json
Copy code
{
  "items": [
    "1234567890123", 
    "9876543210987", 
    "1122334455667"
  ]
}
Important Notes:
Correct Schema: Make sure to send the body with the correct schema ({ items: string[] }). Any deviation from this structure will result in a 400 BAD REQUEST error.
Valid EANs: The EANs must correspond to actual products in the product list. Invalid or missing EANs will return a 404 NOT FOUND response.
Response Structure
If the request is successful, the response will return a JSON object containing the bundle information. The structure of the response is:

json
Copy code
{
  "name": "Bundle Name",
  "description": "This is a bundle of products including [product names]",
  "price": "Total bundle price"
}
Where:

name: A generated name for the bundle.
description: A description of the bundle, summarizing the products included.
price: The total price of the bundle.
Error Handling
1. Invalid Method
If the request method is not POST, you will receive the following response:

json
Copy code
{
  "error": "Only POST method allowed"
}
Status Code: 400 BAD REQUEST

2. Invalid Body Format
If the request body is not in the expected format (missing or incorrect items array), you will get the following response:

json
Copy code
{
  "error": "Provide body with correct schema"
}
Status Code: 400 BAD REQUEST

3. No Matching Products Found
If the provided EANs do not match any products, the response will be:

json
Copy code
{
  "error": "No products match the input"
}
Status Code: 404 NOT FOUND

4. Internal Server Error
If there is an issue creating the bundle, you will receive an internal server error response:

json
Copy code
{
  "error": "An error occurred when creating bundle name. Please check Vercel logs."
}
Status Code: 500 INTERNAL SERVER ERROR

Example Request
Here’s an example of how to structure a request to create a bundle:

bash
Copy code
POST https://convini-backend.vercel.app/api/create-bundle-name

Content-Type: application/json

{
  "items": [
    "1234567890123", 
    "9876543210987", 
    "1122334455667"
  ]
}
Example Response
Success Example:
If the request is successful, you might get a response like this:

json
Copy code
{
  "name": "Holiday Bundle",
  "description": "This bundle includes a selection of items for the holiday season: Item 1, Item 2, and Item 3.",
  "price": "49.99"
}
Error Example:
If the provided EANs do not match any products, the response will be:

json
Copy code
{
  "error": "No products match the input"
}
Additional Notes
Logging and Debugging: If you experience issues with bundle creation, check the logs on Vercel for more details. Errors during the bundle creation process are logged for debugging.
Response Timing: The response time for bundle creation can vary depending on the number of items being processed. Ensure that the request is sent promptly to avoid timeouts.
We hope you enjoy using Convini's API to create dynamic product bundles! If you have any issues or questions, feel free to reach out to the support team.
