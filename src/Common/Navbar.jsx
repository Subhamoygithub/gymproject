import React, { useEffect } from 'react'
import {AppBar, Box,Button,IconButton, Toolbar,Typography} from '@mui/material'
import AppleIcon from '@mui/icons-material/Apple';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Removefun, check_token } from '../Redux/Allslice';
import { toast } from 'react-toastify';
const Navbar = () => {
  const dispatch = useDispatch()
  
  const {loading,LogoutToggle}= useSelector((state)=>state?.logininstore)
  console.log("tgg",LogoutToggle);
 
  const name = localStorage.getItem("Name")
  // console.log("my",name);
  const logout =()=>{
      dispatch(Removefun())
      toast.success("Logged out successfully")
  }
  useEffect(()=>{
   dispatch(check_token())
  },[])
  return (

    <>
    <AppBar style={{backgroundColor:"#ff6e40"}}>
      <Toolbar>
        <IconButton>
        <AppleIcon sx={{fontSize:"40px"}} />
        </IconButton>
        <Typography sx={{flexGrow:1}} variant='h6' component="div">Gym</Typography>
       {
         LogoutToggle?(<>
         <Box>
          <Button color='inherit'><Link to='/' style={{textDecoration:"none", color:"white"}}>Home</Link></Button>
          <Button color='inherit'><Link to='/service' style={{textDecoration:"none", color:"white"}}>Service</Link></Button>
          <Button color='inherit'><Link to='/blog' style={{textDecoration:"none", color:"white"}}>Blog</Link></Button>
          <Button color='inherit'><Link to='/dashboard' style={{textDecoration:"none", color:"white"}}>{name}</Link></Button>
          <Button color='inherit'><Link to='/signin' style={{textDecoration:"none", color:"white"}} onClick={logout}>Logout</Link></Button>
          

          
        </Box>
        </>):
        (<>
         <Box>
          <Button color='inherit'><Link to='/' style={{textDecoration:"none", color:"white"}}>Home</Link></Button>
          <Button color='inherit'><Link to='/service' style={{textDecoration:"none", color:"white"}}>Service</Link></Button>
          <Button color='inherit'><Link to='/blog' style={{textDecoration:"none", color:"white"}}>Blog</Link></Button>
          <Button color='inherit'><Link to='/signin' style={{textDecoration:"none", color:"white"}}>Login</Link></Button>
          <Button color='inherit'><Link to='/register' style={{textDecoration:"none", color:"white"}}>Register</Link></Button>

          
        </Box>

        </>)
       }
      </Toolbar>
    </AppBar>
    
      
    </>
  )
}

export default Navbar;
