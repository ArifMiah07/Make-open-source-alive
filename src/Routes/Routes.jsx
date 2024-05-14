import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/Home/Home/Home";
import CardDetails from "../Components/CardDetails/CardDetails";


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
            path: '/cardDetails:id',
            element: <CardDetails></CardDetails>
        }
        // {
        //     path: '/login',
        //     element: <LogIn></LogIn>
        // },
        // {
        //     path: '/sign-up',
        //     element: <SignUp></SignUp>
        // },
        // {
        //     path: '/checkOut/:id',
        //     element: <PrivateRoute> <CheckOut></CheckOut></PrivateRoute>,
        //     loader: ({params})=> fetch(`https://car-doctor-sever-main.vercel.app/services/${params.id}`)
        // },
        // {
        //     path: '/bookings',
        //     element: <PrivateRoute><Bookings></Bookings></PrivateRoute>
        // }
      ]
    },
  ]);


  export default router;