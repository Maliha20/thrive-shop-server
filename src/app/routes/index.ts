import { Router } from "express"
import { userRoutes } from "../modules/user/user.route"
import { productRoutes } from "../modules/product/product.route"
import { checkoutRoute } from "../modules/checkout/checkout.route"


const router = Router()
const moduleRoutes = [
    {
        path: '/user',
        route: userRoutes
    },
    {
        path: '/products',
        route: productRoutes
    },
    {
        path: '/checkout',
        route: checkoutRoute
    }
]
   


moduleRoutes.forEach((route)=>{
router.use(route.path, route.route)
})

export default router