import './App.css';
import {BrowserRouter as Router, Routes,Route, Navigate} from "react-router-dom"
import Navbar from './Common/Navbar';
import Home from './Page/Home';
import Footer from './Common/Footer';
import Servicepage from './Page/Service';
import Blogpage from './Page/Blog';
import Signin from './Page/Signin'
import Register from './Page/Register'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ServiceDetails from './Page/ServiceDetails';
import BlogDetails from './Page/BlogDetails';
import Bookingheader from './Page/Bookingheader';
// import Login from './Page/Login';
// import SignInSide from './Page/Signin';
import Login from './Page/Login';
import BookingDashboard from './Page/BookingDashboard';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { check_token } from './Redux/Allslice';
import Register2 from './Page/Register2';
import ResponsiveAppBar from './Common/Navbar2';
// import Register2 from './Page/Register2';



function App() {
 
  const queryClient = new QueryClient();
   function PrivateRouter ({children}){
    const token = localStorage.getItem("token") || sessionStorage.getItem("token");
    return token !== null && token !== undefined ? (
      children
    ):(<Navigate to="/signin"/>)
  }
 


  const PublicRouting = [
    {
      path: "/signin",
      Component: <Login/>
    },
    {

      path: "/register",
      Component: <Register2 />
    },
    {
      path:"/",
      Component :<Home/>
    },
    
    {
      path:"/blog",
      Component :<Blogpage/>
    },
   
    {
      path:"/blogdetails/:id",
      Component :<BlogDetails/>
    }
    
    

   
  ]
  const PrivateRouting =[
   
    {
      path:"/service",
      component :<Servicepage/>
    },
    {
      path:"/servicedetails/:id",
      component :<ServiceDetails/>
    },
    {
      path:"/joining/:id",
      component: <Bookingheader/>
    },
    {
      path:"/dashboard",
      component : <BookingDashboard/>
    }
  ]

  return (
    <>
    <QueryClientProvider client={queryClient}>
      <ToastContainer/>
    <Router>
      {/* <Navbar/> */}
      <ResponsiveAppBar/>
      <Routes>
        {
          PublicRouting.map((pub,pubi)=>{
            return(
              <>
               <Route
                 path={pub.path}
                element={pub?.Component}
              />
              </>
            )
          })
        }
        {
          PrivateRouting.map((pri,pi)=>{
            return(
              <>
              <Route
              path={pri.path}
              element={<PrivateRouter>{pri?.component}</PrivateRouter>}
              />
              </>
            )
          })
        }
      </Routes>
      <Footer/>
    </Router>
    </QueryClientProvider>
    

    </>
  );
}

export default App;
