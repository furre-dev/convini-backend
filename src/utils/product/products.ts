export type Product = {
  name: string,
  EAN: string,
  description: string,
  price: {
    in_sek: number,
    discount_in_p: number
  },
}


export const products: Product[] = [
  {
    name: "Redbull 33cl",
    description: "Red Bull Energy Drink. Livar upp kropp och sinne.",
    EAN: "83213271321",
    price: {
      in_sek: 39,
      discount_in_p: 40
    }
  },
  {
    name: "Coca-Cola 33cl",
    description: "Alltsedan 1886 har Coca-Cola sålts som en törstsläckare som passar alla. 98 procent av jordens befolkning känner till varumärket Coca-Cola och drycken finns idag i drygt 200 länder. I Sverige lanserades drycken 1953. Receptet är en väl bevarad hemlighet.",
    EAN: "321212112312",
    price: {
      in_sek: 19,
      discount_in_p: 30
    }
  },
  {
    name: "Coca-Cola 33cl",
    description: "Aloe vera-dryck med bitar av aloe vera med smak av Mango. Utan kolsyra.",
    EAN: "988723898949",
    price: {
      in_sek: 29,
      discount_in_p: 35
    }
  }
]