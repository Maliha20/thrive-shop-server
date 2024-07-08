/* eslint-disable @typescript-eslint/no-this-alias */
import { model, Schema } from "mongoose";
import { TUser } from "./user.interface";
import config from "../../config";
import bcrypt from 'bcrypt';

const userSchema = new Schema<TUser>({
    name: {
        type: String,
        required: true,
      },
      email: { type: String, required: true },
      password: { type: String, required: true },
      phone: { type: String, required: true },
      address: { type: String ,
        required: true,
        validate: {validator: function(value: string){
            const addressFields = value.split(',');
            return addressFields.length === 3 && addressFields.every(field => field.trim().length>0)
        }}   
      }
})

userSchema.pre('save', async function(next) {
    
    const user = this
    user.password = await bcrypt.hash(
        user.password,
        Number(config.bcrypt_salt_rounds)    
    )
    next()
})


userSchema.post('save', async function (doc, next) {
    doc.password = ' ';
    next();
  });

export const User = model<TUser>('User', userSchema)