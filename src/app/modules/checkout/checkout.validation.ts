import { z } from "zod";


  

 export  const checkoutValidationSchema = z.object({
    body: z.object({
        items: z.array(
            z.object({
              product: z.string(), 
              quantity: z.number(),
            })
          ),
        totalPrice: z.number(),
        paymentMethod: z.string(),
        userInformation: z.object({
          name: z.string(), 
          email: z.string().email(),
          phone: z.string(), 
          address: z.string(), 
    })
  })

})