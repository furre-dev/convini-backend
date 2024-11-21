# Convini AI endpoint for creating new bundles.

## Welcome to Convini's API endpoint where we get names, descriptions and prices.

Start by sending a request to the endpoint to [https://convini-backend.vercel.app/api/create-bundle-name](https://convini-backend.vercel.app/api/create-bundle-name).

# Some stuff to think about when using this endpoint

### 1. Only POST method is allowed.  


### 2. The type of the Input body
```javascript
type BodyType = {
  items: string[]
  }
```
#### Make sure it's correct, otherwise you will get a BAD REQUEST (400) response.
