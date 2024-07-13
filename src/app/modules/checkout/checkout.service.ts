import { TCheckout } from "./checkout.interface";
import { Checkout } from "./checkout.model";

const createCheckout =async(payload: TCheckout)=>{
    const result = await Checkout.create(payload)
    return result
}

export const checkoutServices = {
    createCheckout
}