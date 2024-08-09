import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { booking } from '../Redux/BookingSlice';

const Booking = () => {
    const {ServiceDetailsitem,status}= useSelector((state)=>state?.servicedetailsstore);
    const {bookingStatus}= useSelector((state)=>state?.bookingstore)
    // console.log("book",bookingStatus)
    const { id } = useParams();
    const name = localStorage.getItem('Name');
    const memberId = localStorage.getItem('_id');
    const email = localStorage.getItem('email');
    const serviceName = ServiceDetailsitem?.service_name
    const dispatch = useDispatch();
    const [scheme, setScheme] = useState();
    const navi = useNavigate()
    const [price, setPrice] = useState('0');
    const serviceId = id
    console.log(memberId, "myid")
  
    useEffect(() => {
      if (serviceId) {
        switch (scheme) {
          case "Yearly":
            setPrice("12000");
            break;
          case "Half-yearly":
            setPrice("8000");
            break;
          case "Quarterly":
            setPrice("3500");
            break;
          default:
            setPrice("0")
        }
      }
    }, [scheme, price]);
    const handleSubmit = async (e)=>{
      e.preventDefault();
      dispatch(booking({name, email, scheme, price, serviceId, memberId }))

    }
    if(bookingStatus === "success"){
      navi("/dashboard")
    }
 
  
  return (
    <>
    
    <div className="col-md-6 pb-5 mt-5">
        <h2 className="display-4 font-weight-bold mb-2">Book Your Service Today</h2>
        <h4 className='mb-4'>Start Your {serviceName} Journey Now</h4>
        <div className="contact-form">
          <div id="success"></div>
          <form name="sentMessage" id="contactForm" noValidate="noValidate" onSubmit={(e) => handleSubmit(e)}>
            <div className="control-group">
              <input type="hidden" value={memberId} readOnly className="form-control" id="name" placeholder="Your Name" />
              <p className="help-block text-danger"></p>
            </div>
            <div className="control-group">
              <input type="text" value={name} readOnly className="form-control" id="name" placeholder="Your Name" />
              <p className="help-block text-danger"></p>
            </div>
            <div className="control-group">
              <input type="email" value={email} readOnly className="form-control" id="email" placeholder="Your Email" />
              <p className="help-block text-danger"></p>
            </div>
            <div className="control-group">
              <input type="hidden" value={ServiceDetailsitem?._id} name='serviceId' className="form-control" id="training" placeholder="Your Training" />
              <p className="help-block text-danger"></p>
              <p className="help-block text-danger"></p>
            </div>
            <div className="control-group">
              <input type="text" value={ServiceDetailsitem?.service_name}
                name='service_name' className="form-control" id="training" placeholder="Your Training" />
              <p className="help-block text-danger"></p>
              <p className="help-block text-danger"></p>
            </div>
            <div className="control-group">
              <select className="form-control mb-2"
                name="scheme"
                value={scheme}
                onChange={(e) => setScheme(e.target.value)}>
                <option value="" >Select Your Scheme</option>
                <option value="Yearly">Yearly</option>
                <option value="Half-yearly">Half-yearly</option>
                <option value="Quarterly">Quarterly</option>
              </select>
              <p className="help-block text-danger"></p>
            </div>
            <div className="control-group">
              <input
                type="text"
                name='price'
                value={price}
                className="form-control"
                id="price"
                placeholder="Price"
              />
              <p className="help-block text-danger"></p>
            </div>
            <div>
              <button className="btn btn-outline-primary" type="submit" id="sendMessageButton">Book Now</button>
             
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Booking;
