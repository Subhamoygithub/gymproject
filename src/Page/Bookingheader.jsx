import React from 'react'
import Booking from './Booking';

const Bookingheader = () => {
    return (
        <>
            <div className="container-fluid page-header mb-5 ">
                <div className="d-flex flex-column  pt-0 pt-lg-5">
                    <h4 className="display-4 mb-3 mt-0 mt-lg-5 text-white text-uppercase font-weight-bold">Become A Member</h4>
                    <div className="d-inline-flex">
                        <p className="m-0 text-white"><a className="text-white" href>Home</a></p>
                        <p className="m-0 text-white px-2">/</p>
                        <p className="m-0 text-white">Services</p>
                        <p className="m-0 text-white px-2">/</p>
                        <p className="m-0 text-white">Join Us</p>
                    </div>
                </div>
            </div>

            <div className="container gym-class mb-5 pb-5 "  style={{}}>
                <div className="row px-5">
                    <div className="col-md-6 p-0 mt-5">
                        <div className="gym-class-box d-flex flex-column  bg-danger text-right text-white py-5 px-5">
                            <i className="flaticon-six-pack" />
                            <h3 className="display-4 mb-3 text-white font-weight-bold">Connect With Us To Achieve Ultimate Fitness Goal</h3>
                            <p>
                                Lorem justo tempor sit aliquyam invidunt, amet vero ea dolor ipsum ut diam sit dolores, dolor
                                sit eos sea sanctus erat lorem nonumy sanctus takimata. Kasd amet sit sadipscing at..
                            </p>
                        </div>
                    </div>
                    <Booking />
                </div>
            </div>
        </>
    )
}

export default Bookingheader;
