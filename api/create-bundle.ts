import type { VercelRequest, VercelResponse } from '@vercel/node'
import { createBundle } from '../src/utils/openai/createBundle.js';
import { ResponseBodySchema } from '../src/utils/openai/types.js';
import { Product, products } from "../src/utils/product/products.js"

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (!(req.method === "POST")) {
    return res.status(400).send("Only POST method allowed");
  };

  const body = JSON.stringify(req.body);
  const items: { items: string[] } = JSON.parse(body);

  const result = ResponseBodySchema.safeParse(items);

  if (!result.success) {
    return res.status(400).send("Provide body with correct schema");
  };

  //Filter logic to remove undefined cases.
  const productsList: Product[] | null = items.items.map((ean) => {
    return products.find((product) => ean === product.EAN);
  }).filter((product): product is Product => product !== undefined);

  if (!productsList || productsList.length < 1) {
    return res.status(404).send("No products match the input");
  }

  const bundle = await createBundle(productsList);

  if (!bundle) {
    return res.status(500).send("An error occured when creating bundle. Please check Vercel logs.");
  };

  return res.json(bundle)
}
