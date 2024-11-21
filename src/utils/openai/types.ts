import { z } from "zod"

export const ResponseBodySchema = z.object({
  items: z.array(z.string())
})


const Categories = z.enum(["Energi", "Protein", "Färdig mat", "Grönsaker", "Frukt", "Läsk"]);
const CategoriesArray = z.array(Categories);

export const BundleType = z.object({
  bundle_name: z.string(),
  bundle_description: z.string(),
  bundle_categories: CategoriesArray,
});


export type IBundleType = z.infer<typeof BundleType>;