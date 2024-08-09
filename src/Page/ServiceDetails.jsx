import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { STATUS, ServiceDetailsfetch } from '../Redux/Allslice';
import Looder from '../Looder/Looder';


const ServiceDetails = () => {
    const {ServiceDetailsitem,status}= useSelector((state)=>state?.servicedetailsstore);
    const dispatch = useDispatch()
    const {id} = useParams()

    useEffect(()=>{
     dispatch(ServiceDetailsfetch(id))
    },[id])
    console.log("serdel",ServiceDetailsitem);
    if (status === STATUS.LOADING) {
        return (
            <>
                <div style={{ height: '800px',backgroundColor:"black" }}><h1 style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}><Looder /></h1></div>
             
            </>
        )
    }


  return (
    <>
    <div className="container py-5 mt-4">
        <div className="row">
          <div className="col-12">
            <div className="d-flex align-items-center mb-4">
              <div className="d-flex flex-column align-items-center justify-content-center rounded-circle bg-danger mr-1 text-white" style={{ width: 100, height: 100 }}>
                <span>01</span>
                <strong className="text-uppercase m-0 text-white">Jan</strong>
                <span>2045</span>
              </div>
              <div className="pl-3">
                <h1 className="font-weight-bold mb-3">{ServiceDetailsitem?.service_name}</h1>
               
              </div>
            </div>
            <img className="w-50 float-left mr-4 mb-3" src={`https://corefitserver.onrender.com/${ServiceDetailsitem?.image}`} alt="Image" />
            <p><b>{ServiceDetailsitem?.service_description}</b></p>
            
            <Link to={`/joining/${ServiceDetailsitem?._id}`} className='btn btn-lg btn-danger px-4 py-2'>Join Now</Link>
          </div>


        </div>
      </div>
      
    </>
  )
}

export default ServiceDetails;
