import { z } from "zod";

export const productValidationSchema = z.object({
    body:z.object({
        name: z.string(),
        price: z.number(),
        category: z.string(),
        description: z.string(),
        stockQuantity: z.number(),
        image: z.string(),
    })
})

export const updateProductValidationSchema = z.object({
    body: z.object({
        name: z.string().optional(),
        price: z.number().optional(),
        category: z.string().optional(),
        description: z.string().optional(),
        stockQuantity: z.number().optional(),
        image: z.string().optional(),  
        isDeleted: z.boolean().optional()
    })
})