import QueryBuilder from "../../builder/QueryBuilder";
import { productSearchableFields } from "./product.constant";
import { TProduct } from "./product.interface";
import { Product } from "./product.model";

const createProductIntoDB = async(payload: TProduct)=> {
    const result = await Product.create(payload)
    return result
}
const getAllProductsFromDB = async(query: Record<string, unknown>)=> {
   
    const productQuery = new QueryBuilder(Product.find({isDeleted: false}), query).search(productSearchableFields).filter().sort().paginate()
    const result = await productQuery.modelQuery;
    return result
}
const getAProductFromDB = async(id: string)=>{
    const result = await Product.findById(id)
    return result
}
const updateProductIntoDb = async (id: string, payload: Partial<TProduct>) => {

    const result = await Product.findByIdAndUpdate(id  ,
      payload,
      { new: true });
    return result;
  };
  const deleteProductFromDb = async (id: string) => {

    const result = await Product.findByIdAndUpdate(
      id,
      {isDeleted: true , new: true });
    return result;
  };
  
export const productServices = {
    createProductIntoDB,
    getAllProductsFromDB,
    getAProductFromDB,
    updateProductIntoDb,
    deleteProductFromDb
}