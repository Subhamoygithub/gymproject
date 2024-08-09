import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { STATUS, Service } from '../Redux/Allslice';
import { Link } from 'react-router-dom';
import Looder from '../Looder/Looder';

const Servicepage = () => {
   const dispatchservice = useDispatch()
   const {serviceitem: servicei,status} = useSelector((state)=>state?.servicestore)
   console.log("service", servicei);

   useEffect(()=>{
        dispatchservice(Service())
   },[])
   if (status === STATUS.LOADING) {
    return (
        <>
            <div style={{ height: '800px',backgroundColor:"black" }}><h1 style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}><Looder /></h1></div>
         
        </>
    )
}

  return (
    
    <>
       {/* <!-- Blog Start --> */}
    <div class="container pt-5">
        <div class="d-flex flex-column text-center mb-5">
            <h4 class="text-primary font-weight-bold pt-3">Our Service</h4>
            <h4 class="display-4 font-weight-bold">Latest Article From Service</h4>
        </div>
        <div class="row">
            {
                servicei?.map((seri,serindex)=>{
                    return(
                        <>
                         <div class="col-lg-6 mb-5 blog-item">
                <img class="img-fluid mb-4 transform" src={`https://corefitserver.onrender.com/${seri.image}`} alt="Image"/>
                <div class="d-flex align-items-center mb-4">
                    <div class="d-flex flex-column align-items-center justify-content-center rounded-circle bg-danger mr-1 text-white" style={{width: "80px", height: "80px"}}>
                        <small>01</small>
                        <strong class="text-uppercase m-0 text-white">Jan</strong>
                        <small>2045</small>
                    </div>
                    <div class="pl-3">
                        <h3 class="font-weight-bold">{seri.service_name}</h3>
                        <div class="d-flex">
                            <small class="mr-2 text-muted"><i class="fa fa-user"></i> {seri?.trainer_details[0]?.name}</small>
                            <small class="mr-2 text-muted"><i class="fa fa-folder"></i> {seri?.trainer_details[0]?.experience}</small>
                            <small class="mr-2 text-muted"><i class="fa fa-comments"></i> 15 Comments</small>
                        </div>
                    </div>
                </div>
                <p>{seri.service_description.slice(0,500)}</p>
                <Link class="btn btn-outline-primary mt-2 px-3" to={`/servicedetails/${seri._id}`}>Read More <i class="fa fa-angle-right"></i></Link>
            </div>
            
                        </>
                    )
                })
            }
           
        </div>
    </div>
    {/* <!-- Blog End --> */}
    </>
  )
}

export default Servicepage;
