    import { createBrowserRouter } from "react-router-dom";
  
    import ProtectedRoute from "../auth/authUser";
    import Register from '../components/pages/register/Register';
    import "@fontsource/poppins";
    import Profile from '../components/pages/profile/Profile';
    import Layout from '../layouts/Layout';
    import Login from '../components/pages/login/Login';
    import Home from '../components/pages/home/Home';


const router = createBrowserRouter([
    {
      path: "/",
      element:( 
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
        ),

      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile",
          element: <Profile />,
        }
      ]
    },
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "register",
      element: <Register />,
    }
  ]);

  export default router;