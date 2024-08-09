import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { BlogDetailsfetch, STATUS } from '../Redux/Allslice';
import Looder from '../Looder/Looder';

const BlogDetails = () => {
    const {blogdetailsitem,status} = useSelector((state)=>state?.blogdetailsstore);
    const dispatch = useDispatch();
    const {id} = useParams()

    useEffect(()=>{
        dispatch(BlogDetailsfetch(id))
    },[id])
    console.log("blog d",blogdetailsitem);
    if (status === STATUS.LOADING) {
        return (
            <>
                <div style={{ height: '800px',backgroundColor:"black" }}><h1 style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}><Looder /></h1></div>
             
            </>
        )
    }

  return (
    <>
    
    <div className="container py-5 mt-5">
                <div className="row">
                    <div className="col-12">
                        <div className="d-flex align-items-center mb-4">
                            <div className="pl-3">
                                <h2 className="mb-4 font-weight-bold">{blogdetailsitem?.title}</h2>
                                <p style={{ fontSize: "18px" }}><b>{blogdetailsitem?.subtitle}</b></p>
                                <img className="w-60 float-right ml-4 mb-3 readmores" src={`https://corefitserver.onrender.com/${blogdetailsitem?.image}`} alt="Image" />
                                <p>{blogdetailsitem?.content}</p>
                                <Link to='/blog' className="btn btn-outline-primary mt-2 px-3"  >Back <i className="fa fa-angle-right" /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      
    </>
  )
}

export default BlogDetails;
