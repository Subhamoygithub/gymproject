import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Carousel from "react-bootstrap/Carousel"
import { Banner, STATUS, Testtimonial, Trainer } from '../Redux/Allslice';
import Servicepage from './Service';
import Looder from '../Looder/Looder';

const Home = () => {
    const dispatchHome = useDispatch();
    const { banneritem: banner, status } = useSelector((state) => state?.bannerstore)
    const { traineritem: trainer, sta } = useSelector((state) => state?.traierstore)
    const { testtimonialitem: testtii, tu } = useSelector((state) => state?.testtimonialstore)
    // console.log("testti", testtii);
    // console.log(banner[0]?.image);

    useEffect(() => {
        dispatchHome(Banner())
        dispatchHome(Trainer())
        dispatchHome(Testtimonial())
    }, [])

    if (status === STATUS.LOADING) {
        return (
            <>
                <div style={{ height: '800px',backgroundColor:"black" }}><h1 style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}><Looder /></h1></div>
             
            </>
        )
    }

    if (status === STATUS.ERROR) {
        return <h2>Something went wrong please check your Api connection!</h2>;
    }
    if (sta === STATUS.LOADING) {
        return (
            <>
                <div className='text-center' style={{ marginTop: "350px" }}> <Looder /></div>
            </>
        )
    }
    if (tu === STATUS.LOADING) {
        return (
            <>
                <div className='text-center' style={{ marginTop: "350px" }}> <Looder /></div>
            </>
        )
    }

    return (
        <>
            {/* banner  */}
            <Carousel data-bs-theme="dark" indicators={false}>
                {
                    banner?.map((banr, index) => {
                        return (
                            <Carousel.Item >
                                <img className='d-block w-100 ' src={`https://corefitserver.onrender.com/${banr?.image}`} alt="Banner" />
                                <Carousel.Caption>
                                    <h1 className='text' style={{ position: 'relative', bottom: '400px', textTransform: "uppercase", }} >{banr?.title}</h1>
                                    <p className='para' style={{ position: 'relative', bottom: '370px', letterSpacing: "3px", fontSize: '22px' }}>
                                        {banr?.subtitle}
                                    </p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        )
                    })
                }
            </Carousel>
            {/* end banner  */}

            {/* <!-- About Start --> */}
            <div class="container py-5">
                <div class="row align-items-center">
                    <div class="col-lg-6">
                        <img class="img-fluid mb-4 mb-lg-0" src="img/about.jpg" alt="Image" />
                    </div>
                    <div class="col-lg-6">
                        <h2 class="display-4 font-weight-bold mb-4">10 Years Experience</h2>
                        <p>Labore vero lorem eos sed aliquy ipsum aliquy sed. Vero dolore dolore takima ipsum lorem rebum</p>
                        <div class="row py-2">
                            <div class="col-sm-6">
                                <i class="flaticon-barbell display-2 text-primary"></i>
                                <h4 class="font-weight-bold">Certified GYM Center</h4>
                                <p>Ipsum sanctu dolor ipsum dolore sit et kasd duo</p>
                            </div>
                            <div class="col-sm-6">
                                <i class="flaticon-medal display-2 text-primary"></i>
                                <h4 class="font-weight-bold">Award Winning</h4>
                                <p>Ipsum sanctu dolor ipsum dolore sit et kasd duo</p>
                            </div>
                        </div>
                        <a href="" class="btn btn-lg px-4 btn-outline-primary">Learn More</a>
                    </div>
                </div>
            </div>
            {/* <!-- About End --> */}
            <Servicepage />

            {/* trainer */}
            {/* <!-- Team Start --> */}
            <div class="container pt-5 team">
                <div class="d-flex flex-column text-center mb-5">
                    <h4 class="text-primary font-weight-bold">Our Trainers</h4>
                    <h4 class="display-4 font-weight-bold">Meet Our Expert Trainers</h4>
                </div>
                <div class="row" style={{ border: "1px solid blu" }}>
                    {
                        trainer?.map((traineri, tindex) => {
                            return (
                                <>

                                    <div class="col-lg-4 col-md-6 mb-5" style={{ border: "1px solid blu" }}>
                                        <div class="card border-0 bg-secondary text-center text-white">
                                            <img class="card-img-top" style={{ height: "420px" }} src={`https://corefitserver.onrender.com/${traineri.image}`} alt="" />
                                            <div class="card-social d-flex align-items-center justify-content-center">
                                                <a class="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{ width: "40px", height: "40px", href: "#" }}><i class="fab fa-twitter"></i></a>
                                                <a class="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{ width: "40px", height: "40px", href: "#" }}><i class="fab fa-facebook"></i></a>
                                                <a class="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{ width: "40px", height: "40px", href: "#" }}><i class="fab fa-whatsapp"></i></a>
                                                <a class="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{ width: "40px", height: "40px", href: "#" }}><i class="fab fa-instagram"></i></a>
                                            </div>
                                            <div class="card-body bg-secondary">
                                                <h4 class="card-title text-primary">{traineri.name}</h4>
                                                <p class="card-text">{traineri.speciality}</p>
                                            </div>
                                        </div>
                                    </div>


                                </>

                            )
                        })
                    }
                </div>
            </div>
            {/* <!-- Team End --> */}

            {/*end trainer */}
            <div class="d-flex flex-column text-center mb-5">
                <h4 class="text-primary font-weight-bold">Our Testimonial Team</h4>
                <h4 class="display-4 font-weight-bold">Meet Our Testimonial Trainers</h4>
            </div>


            {/* <!-- Testimonial Start --> */}
            <div className='d-flex align-items-center justify-content-center vh-50 ' >


            <Carousel style={{width:"800px",height:"500px", backgroundColor:"black",backgroundImage:"url(https://www.pexels.com/photo/photo-of-woman-lifting-dumbbell-1554824/)",backgroundSize:"100% 100%"}} data-bs-theme="pink"  indicators={false}>
                {
                    testtii?.map((titem, i) => {
                        return (
                            <Carousel.Item >
                                <div class="d-flex align-items-center mb-4 text-white"  style={{width:"700px",height:"300px"}}>
                                    <img width="80" height="80" class="rounded-circle bg-dark p-2 " style={{marginLeft:"300px"}} src={`https://corefitserver.onrender.com/${titem.image}`} />
                                    <div class="pl-4">
                                        <h4 class="text-primary">{titem.client_name}</h4>
                                        <p class="m-0">Profession</p>
                                    </div>
                                </div>
                                <div class="testimonial-text position-relative border bg-dark text-white mb-5 p-4">
                                    {titem.review}
                                </div>
                                {/* <Carousel.Caption>
                                   
                                </Carousel.Caption> */}
                            </Carousel.Item>
                        )
                    })
                }
            </Carousel>
            </div>
            

            {/* <!-- Testimonial End --> */}

        </>
    )
}

export default Home;
{/* <div class="d-flex align-items-center mb-4 text-white">
<img width="80" height="80" class="rounded-circle bg-dark p-2" src={`https://corefitserver.onrender.com/${titem.image}`} />
<div class="pl-4">
    <h4 class="text-primary">{titem.client_name}</h4>
    <p class="m-0">Profession</p>
</div>
</div>
<div class="testimonial-text position-relative border bg-dark text-white mb-5 p-4">
{titem.review}
</div> */}

