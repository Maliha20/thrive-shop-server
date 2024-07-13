import { model, Schema } from "mongoose";
import { TCheckout } from "./checkout.interface";


// Define Checkout Schema
const checkoutSchema = new Schema<TCheckout>({
  items: [
    {
      product: {
        type: Schema.Types.ObjectId,
        ref: 'Product', 
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
    },
  ],
  totalPrice: {
    type: Number,
    required: true,
  },
  paymentMethod: {
    type: String,
    required: true,
  },
  userInformation: {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
  },
  
},{timestamps:true});

export const Checkout = model('Checkout', checkoutSchema);


