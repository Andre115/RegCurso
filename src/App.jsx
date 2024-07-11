import Login from '../components/pages/login/Login';
import About from '../components/pages/about/About';
import Home from '../components/pages/home/Home';
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
  Link,
  Outlet
} from "react-router-dom";
import Register from '../components/pages/register/Register'
import NavBar from '../layouts/navbar/NavBar';
import Footer from '../layouts/footer/Footer';
import "@fontsource/poppins";
import Profile from '../components/pages/profile/Profile';





function App() {

  const Layout= ()=>{
    return(
      <div className="container_app">
        <NavBar />
        <main><Outlet/></main>
        <Footer />
        
      </div>
    )
  }


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
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


  return (
    <>
      <div>
      <RouterProvider router={router}/>
      </div>
      
    </>
  )
}

export default App
