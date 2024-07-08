import { z } from "zod";

export const productValidationSchema = z.object({
    name: z.string(),
    price: z.number(),
    category: z.string(),
    description: z.string(),
    stockQuantity: z.number(),
    image: z.string(),
})

export const updateProductValidationSchema = z.object({
    name: z.string(),
    price: z.number(),
    category: z.string(),
    description: z.string(),
    stockQuantity: z.number(),
    image: z.string(),  
    isDeleted: z.boolean()
})