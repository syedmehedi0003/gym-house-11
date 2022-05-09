import React from 'react';
import img from '../../../images/bodybuilding-png-hd.png';
import '../Banner/Banner.css';


const Banner = () => {
    return (
        <div className='home-container container'>

            <div className='banner-part row'>

                <div className="banner-text col-12 col-md-6 ">
                    <h1> <span> Gym House</span> <br />Build YourSelf</h1>
                    <p>A gymnasium, also known as a gym, is a covered location for athletics. The word is derived from the ancient Greek term "gymnasium". They are commonly found in athletic and fitness centres, and as activity and learning spaces in educational institutions.</p>
                    {/* <button className='live-btn'>Live demo</button> */}
                </div>

                <div className="banner-img col-12 col-md-6 ">
                    <img style={{ paddingTop: '0px' }} src={img} alt="" />

                </div>

            </div>
        </div>
    );
};

export default Banner;