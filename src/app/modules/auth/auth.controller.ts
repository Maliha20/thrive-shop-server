
import httpStatus from "http-status";
import { authServices } from "./auth.service";
import catchAsync from "../../../utils/catchAsync";
import sendResponse from "../../../utils/sendResponse";

const loginUser = catchAsync(async(req, res)=>{
   
    const result = await authServices.loginUserIntoDb(req.body)

    sendResponse(res, {
        success:true,
        statusCode: httpStatus.OK,
        message: "User logged in successfully",
        data: result
    })
})


export const authControllers = {
    loginUser
}