import React from 'react'

const Footer = () => {
  return (
    <>
       {/* <!-- Footer Start --> */}
    <div class="footer container-fluid mt-5 py-5 px-sm-3 px-md-5 text-white">
        <div class="row pt-5">
            <div class="col-lg-3 col-md-6 mb-5">
                <h4 class="text-primary mb-4">Get In Touch</h4>
                <p><i class="fa fa-map-marker-alt mr-2"></i>123 Street, New York, USA</p>
                <p><i class="fa fa-phone-alt mr-2"></i>+012 345 67890</p>
                <p><i class="fa fa-envelope mr-2"></i>info@example.com</p>
                <div class="d-flex justify-content-start mt-4">
                    <a class="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{width: "40px", height: "40px", href:"#"}}><i class="fab fa-twitter"></i></a>
                    <a class="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{width: "40px", height: "40px", href:"#"}}><i class="fab fa-facebook"></i></a>
                    <a class="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{width: "40px", height: "40px", href:"#"}}><i class="fab fa-whatsapp"></i></a>
                    <a class="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{width: "40px", height: "40px", href:"#"}}><i class="fab fa-instagram"></i></a>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 mb-5">
                <h4 class="text-primary mb-4">Quick Links</h4>
                <div class="d-flex flex-column justify-content-start">
                    <a style={{textDecoration:"none"}} class="text-black mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Home</a>
                    <a style={{textDecoration:"none"}} class="text-black mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>About Us</a>
                    <a style={{textDecoration:"none"}}  class="text-black mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Our Features</a>
                    <a  style={{textDecoration:"none"}} class="text-black mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Classes</a>
                    <a style={{textDecoration:"none"}} class="text-black" href="#"><i class="fa fa-angle-right mr-2"></i>Contact Us</a>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 mb-5">
                <h4 class="text-primary mb-4">Popular Links</h4>
                <div class="d-flex flex-column justify-content-start">
                    <a style={{textDecoration:"none"}} class="text-black mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Home</a>
                    <a style={{textDecoration:"none"}} class="text-black mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>About Us</a>
                    <a style={{textDecoration:"none"}}  class="text-black mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Our Features</a>
                    <a  style={{textDecoration:"none"}} class="text-black mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Classes</a>
                    <a style={{textDecoration:"none"}} class="text-black" href="#"><i class="fa fa-angle-right mr-2"></i>Contact Us</a>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 mb-5">
                <h4 class="text-primary mb-4">Opening Hours</h4>
                <h5 class="text-white">Monday - Friday</h5>
                <p>8.00 AM - 8.00 PM</p>
                <h5 class="text-white">Saturday - Sunday</h5>
                <p>2.00 PM - 8.00 PM</p>
            </div>
        </div>
        <div class="container border-top border-dark pt-5">
            <p class="m-0 text-center text-white">
                &copy; <a class="text-black font-weight-bold" href="#">Your Site Name</a>. All Rights Reserved. Designed by
                <a class="text-black font-weight-bold" href="https://htmlcodex.com">HTML Codex</a>
            </p>
        </div>
    </div>
    {/* <!-- Footer End --> */}
    </>
  )
}

export default Footer;