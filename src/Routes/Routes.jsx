import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/Home/Home/Home";
import CardDetails from "../Components/CardDetails/CardDetails";
import AddCard from "../Pages/AddCard/AddCard";
import LogIn from "../Pages/LogIn/LogIn";
import Register from "../Pages/Register/Register";
import About from "../Pages/About/About";
import Profile from "../Pages/Profile/Profile";
import Blogs from "../Pages/Blogs/Blogs";
import SearchPage from "../Pages/SearchPage/SearchPage";
import Explore from "../Pages/Explore/Explore";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
    //   errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/explore',
          element: <Explore></Explore>
        },
        {
            path: '/cardDetails:id',
            element: <CardDetails></CardDetails>
        },
        {
          path: '/addCard',
          element: <AddCard></AddCard>
        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '/profile',
          element: <Profile></Profile>
        },
        {
          path: '/blogs',
          element: <Blogs></Blogs>
        },
        {
          path: '/search',
          element: <SearchPage></SearchPage>
        },
        {
            path: '/login',
            element: <LogIn></LogIn>
        },
        {
            path: '/register',
            element: <Register></Register>
        }
      ]
    },
  ]);


  export default router;