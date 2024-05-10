import { Routes, Route} from "react-router-dom";
import { Navigate } from "react-router-dom";
import Layout from "./Layouts/layout";
import Login from "./Pages/Login";
import HomePage from "./Pages/HomePage";
import AuthCallbackPage from "./Pages/AuthCallbackPage";
import UserProfilePage from "./Pages/UserProfilePage";
import ProtectedRoute from "./auth/ProtectedRoute";
import ManageRestaurantPage from "./Pages/ManageRestaurantPage";
import SearchPage from "./Pages/SearchPage";
import DetailPage from "./Pages/DetailPage";
import OrderStatusPage from "./Pages/OrderStatusPage";
import Blog from "./Pages/Blog";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import PartnerWithUs from "./Pages/PartnerWithUs";
import PrivacyPage from "./Pages/PrivacyPage";
import SecurityPage from "./Pages/SecurityPage";
import TermsPage from "./Pages/TermsPage";
import DocumentationPage from "./Pages/DocumentationPage";
import TutorialGuidePage from "./Pages/TutorialGuidePage";
const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Layout showHero><HomePage/></Layout>}/>
        <Route path="/auth-callback" element={<AuthCallbackPage/>}/>
        <Route path="/search/:city" element={<Layout showHero={false}><SearchPage/></Layout>}/>
        <Route path="/detail/:restaurantId" element={<Layout showHero={false}><DetailPage/></Layout>}/>
        <Route element={<ProtectedRoute/>}>
          <Route path="/user-profile" element={<Layout><UserProfilePage/></Layout>}/>
          <Route path="/manage-restaurant" element={<Layout><ManageRestaurantPage/></Layout>}/>
          <Route path="/order-status" element={<Layout><OrderStatusPage/></Layout>}/>
        </Route>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/blog" element={<Layout><Blog/></Layout>}/>
        <Route path="/about-us" element={<Layout><AboutUs/></Layout>}/>
        <Route path="/contact-us" element={<Layout><ContactUs/></Layout>}/>
        <Route path="/partner-with-us" element={<Layout><PartnerWithUs/></Layout>}/>
        <Route path="/privacy" element={<Layout><PrivacyPage/></Layout>}/>
        <Route path="/security" element={<Layout><SecurityPage/></Layout>}/>
        <Route path="/terms" element={<Layout><TermsPage/></Layout>}/>
        <Route path="/documentation" element={<Layout><DocumentationPage/></Layout>}/>
        <Route path="/tutorials-guides" element={<Layout><TutorialGuidePage/></Layout>}/>


       /* The `<Route path="*" element={<Navigate to="/"/>}/>` in the code snippet is a catch-all route
       that matches any path that hasn't been matched by the previous defined routes. */
        <Route path="*" element={<Navigate to="/"/>}/>
    </Routes>
  );
};

export default AppRoutes;