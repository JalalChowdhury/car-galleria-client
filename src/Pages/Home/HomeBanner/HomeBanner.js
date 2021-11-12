import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import headerBanner from '../../../Images/banner-car2.jpg';
import './HomeBanner.css';

const HomeBanner = () => {


    return (
        <div>
            <div>
                <img src={headerBanner} className="homeBanner" alt="" />
                <div className="header-bodyDesign">

                    <h1 id="home-header1">LET'S FIND YOUR PERFECT CAR</h1>

                    <p id="home-header2" className="home-text my-3">QUALITY CARS. BETTER PRICES. TEST DRIVES BROUGHT TO YOU.</p>

                    <Link to="/products">
                        <Button className="servicBtn-design me-3 " style={{ width: '200px' }}>Explores</Button>
                    </Link>




                </div>
            </div>
        </div>
    );
};

export default HomeBanner;