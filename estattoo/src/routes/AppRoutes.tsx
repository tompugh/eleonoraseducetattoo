import { Routes, Route } from "react-router-dom"
import { ROUTE } from "./routePath"
import NotFound from "../ui/features/defaults/NotFound"
import { Home } from "../ui/features/defaults/Home"
import ProtectedRoute from "./ProtectedRoute"

export const AppRoutes = () => {

    return (<Routes>

            {/* Protected Routes */}
            <Route element={<ProtectedRoute />}>
            
            </Route>

            {/* Public Routes */}
            <Route path={ROUTE.HOME} element={<Home />} />
            <Route path="*" element={<NotFound />} />

    </Routes>)

}