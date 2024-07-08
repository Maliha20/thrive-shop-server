import httpStatus from "http-status";
import catchAsync from "../../../utils/catchAsync";
import sendResponse from "../../../utils/sendResponse";
import { productServices } from "./product.service";

const createProduct = catchAsync(async(req,res)=>{
    const result = await productServices.createProductIntoDB(req.body)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Product created successfully",
        data: result
    })
})
const getAllProducts = catchAsync(async(req,res)=>{
    const result = await productServices.getAllProductsFromDB()
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "All products retrieved successfully",
        data: result
    })
})
const getAProduct = catchAsync(async(req,res)=>{
    const {id} = req.params
    const result = await productServices.getAProductFromDB(id)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Product retrieved successfully",
        data: result
    })
})

const updateAProduct = catchAsync(async(req, res)=>{

    const {id} = req.params
    
    const result = await productServices.updateProductIntoDb(id, req.body)
    sendResponse(res,{
        success: true,
        statusCode: httpStatus.OK,
        message: "Product updated successfully",
        data: result
    
    })
})
const deleteAProduct = catchAsync(async(req, res)=>{

    const {id} = req.params
    
    const result = await productServices.deleteProductFromDb(id)
    sendResponse(res,{
        success: true,
        statusCode: httpStatus.OK,
        message: "Product deleted successfully",
        data: result
    
    })
})
export const productControllers = {
    createProduct,
    getAProduct,
    getAllProducts,
    deleteAProduct,
    updateAProduct
}