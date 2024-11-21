# Convini AI Endpoint for Creating New Bundles

Welcome to **Convini's API**! This API helps you create bundles of products with a generated name, description, and price. Below is the documentation on how to use the API to create product bundles. You will find detailed information on the request format, endpoint, and response structure.

## Table of Contents
1. [Overview](#overview)
2. [Endpoint](#endpoint)
3. [Request Method](#request-method)
4. [Request Body](#request-body)
5. [Response Structure](#response-structure)
6. [Error Handling](#error-handling)
7. [Example Request](#example-request)
8. [Example Response](#example-response)
9. [Additional Notes](#additional-notes)

---

## Overview
Convini's API allows you to **create bundles** from a set of product items. Once you provide the list of product EANs (European Article Numbers), the API generates a bundle with a name, description, and price based on the items.

---

## Endpoint
The API endpoint for creating a new bundle is:


### Allowed Method
- **POST**: This is the only supported method for making a request to this endpoint.

---

## Request Method

### HTTP Method: `POST`

This endpoint **only accepts POST requests**. If a request is made using any other method (such as GET), the server will return a `400 BAD REQUEST` response.

---

## Request Body

The request body should be in JSON format and must follow this schema:

```javascript
{
  "items": [
    "ean1", 
    "ean2", 
    "ean3"
  ]
}

{
  "items": [
    "1234567890123", 
    "9876543210987", 
    "1122334455667"
  ]
}
