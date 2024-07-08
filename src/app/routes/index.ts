import { Router } from "express"
import { userRoutes } from "../modules/user/user.route"
import { authRoutes } from "../modules/auth/auth.routes"
import { productRoutes } from "../modules/product/product.route"

const router = Router()
const moduleRoutes = [
    {
        path: '/user',
        route: userRoutes
    },
    {
        path: '/auth',
        route: authRoutes
    },
    {
        path: '/products',
        route: productRoutes
    }
 
]
   


moduleRoutes.forEach((route)=>{
router.use(route.path, route.route)
})

export default router