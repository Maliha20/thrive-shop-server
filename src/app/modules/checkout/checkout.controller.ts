import httpStatus from "http-status";
import catchAsync from "../../../utils/catchAsync";
import sendResponse from "../../../utils/sendResponse";
import { checkoutServices } from "./checkout.service";

const createCheckout = catchAsync(async(req, res)=>{
    const result = await checkoutServices.createCheckout(req.body)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Order placed successfully",
        data: result
    })
})

export const checkoutController = {
    createCheckout
}