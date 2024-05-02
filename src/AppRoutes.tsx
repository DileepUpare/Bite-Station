import { Routes, Route} from "react-router-dom";
import { Navigate } from "react-router-dom";
import Layout from "./Layouts/layout";
import Login from "./Pages/Login";
import HomePage from "./Pages/HomePage";
import AuthCallbackPage from "./Pages/AuthCallbackPage";
import UserProfilePage from "./Pages/UserProfilePage";
import ProtectedRoute from "./auth/ProtectedRoute";
import ManageRestaurantPage from "./Pages/ManageRestaurantPage";
const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Layout showHero><HomePage/></Layout>}/>
        <Route path="/auth-callback" element={<AuthCallbackPage/>}/>
        <Route element={<ProtectedRoute/>}>
        <Route path="/user-profile" element={<Layout><UserProfilePage/></Layout>}/>
        <Route path="/manage-restaurant" element={<Layout><ManageRestaurantPage/></Layout>}/>
        </Route>
        <Route path="/Login" element={<Login/>}/>

       /* The `<Route path="*" element={<Navigate to="/"/>}/>` in the code snippet is a catch-all route
       that matches any path that hasn't been matched by the previous defined routes. */
        <Route path="*" element={<Navigate to="/"/>}/>
    </Routes>
  );
};

export default AppRoutes;