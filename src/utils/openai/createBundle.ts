"use server"
import { calculateTotalPrice } from '../calculations/calculateTotalPrice.js';
import { Product } from '../product/products.js';
import dotenv from 'dotenv';
import OpenAI from "openai";
import { zodResponseFormat } from "openai/helpers/zod";
import { BundleType } from "./types.js";

dotenv.config({ path: '.env.local' });

const openai = new OpenAI({ apiKey: process.env.CONVINI_API_KEY });

export async function createBundle(input: Product[]) {

  const onlyNamesAndDescriptions = input.map((product) => {
    return { name: product.name, description: product.description }
  })

  const totalPrice = calculateTotalPrice(input)

  const completion = await openai.beta.chat.completions.parse({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system", content: `
            You are a **SWEDISH** creative "name creator" for bundles. I will provide you with an array of items, e.g., ["Coca Cola 33cl", "Redbull 33cl", "Ahlgrens bilar", "Extra Tuggummi"], and you will come up with a highly creative and catchy name for the bundle, try to add some FUN & JOY. If an item specifies a FLAVOR like "mango" or "apple", for example "Mer Juice Äpple", don't add the fruit category, because it's not a fruit, its only the flavor.
    
            Some examples:
            ---------
            input: ["Redbull 33cl", "Thaibox Kyckling Curry"],
            output: {
                bundle_name: "Red Hot Curry Boost",
                bundle_description: "En smakrik kombo med thaicurry och energi – perfekt för dig som vill ha både styrka och fart!"
            }
            --------
            input: ["Coca-Cola 33cl", "Kex Choklad", "Ahlgrens Bilar"],
            output: {
                bundle_name: "Sötsugspausen",
                bundle_description: "Perfekt mix för en snabb energikick och något sött – njut av cola, choklad och klassiska Ahlgrens bilar!"
            }
            --------
        `
      },
      {
        role: "user",
        content: JSON.stringify(onlyNamesAndDescriptions),
      },
    ],
    temperature: 0,
    response_format: zodResponseFormat(BundleType, "Bundle")
  });

  return { ...completion.choices[0].message.parsed, price: totalPrice }
}