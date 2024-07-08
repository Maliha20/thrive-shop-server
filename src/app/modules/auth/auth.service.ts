
import { TLoginUser } from "./auth.interface";
import bcrypt from 'bcrypt';
import { User } from "../user/user.model";


const loginUserIntoDb = async(payload:TLoginUser)=>{
    const user = await User.findOne({email: payload?.email}).select(
        '+password',
      )
    if(!user){
        throw new Error("User not found")
    }
 //checkPasswordMatchesOrNot
 const doesPasswordMatch = await bcrypt.compare(payload?.password , user?.password)

 if(!doesPasswordMatch){
     throw new Error("Password doesn't match")
 }

  return user
}


export const authServices = {
    loginUserIntoDb
}

