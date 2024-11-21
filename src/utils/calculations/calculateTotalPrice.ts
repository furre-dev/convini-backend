import { Product } from "@utils/product/products"

export function calculateTotalPrice(products: Product[]) {
  let price = 0;

  products.map((product) => {
    const base_price = product.price.in_sek;
    const new_price = base_price * (1 - (product.price.discount_in_p / 100));
    price += new_price
  })

  const flatPrice = Math.round(price)
  return flatPrice + 0.99
}