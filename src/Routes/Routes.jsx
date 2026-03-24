import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Books from "../Pages/Books/Books";
import Cart from "../Pages/Cart/Cart";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import Profile from "../Pages/Profile/Profile";
import WishList from "../Pages/WishList/WishList";
import ForgetPassword from "../Pages/ForgetPassword/ForgetPassword";
import ResetPassword from "../Pages/ResetPassword/ResetPassword";
import AddCode from "../Pages/AddCode/AddCode";
import OrderHistory from "../Pages/OrderHistory/OrderHistory";
import Error from "../Pages/Error/Error";
import SingleBook from "../Pages/SingleBook/SingleBook";
import CheckOut from './../Pages/Checkout/Checkout';


const router = createBrowserRouter([
     {
          path: "/",
          element: <MainLayout />,
          errorElement: <Error />,
          children: [
               {
                    path: "/",
                    element: <Home />
               },
               {
                    path: "about",
                    element: <About />
               },
               {
                    path: "books",
                    element: <Books />
               },
               {
                    path: "single-book/:id",
                    element: <SingleBook />
               },
               {
                    path: "cart",
                    element: <Cart />
               },
               {
                    path: "checkout",
                    element: <CheckOut />
               },
               {
                    path: "login",
                    element: <Login />
               },
               {
                    path: "signup",
                    element: <Signup />
               },
               {
                    path: "profile",
                    element: <Profile />
               },
               {
                    path: "wishlist",
                    element: <WishList />
               },
               {
                    path: "forget-password",
                    element: <ForgetPassword />
               },
               {
                    path: "reset-password",
                    element: <ResetPassword />
               },
               {
                    path: "add-code",
                    element: <AddCode />
               },
               {
                    path: "order-history",
                    element: <OrderHistory />
               },
          ],
     },
]);

export default router;