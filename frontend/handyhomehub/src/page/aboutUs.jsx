import React from 'react';
import './aboutUs.css'; 

const AboutUs = () => {
    return (
        <>
        <h1>About Us</h1>
        <div className="about-container">
            <h1>Who We Are</h1>
            <p>
                HandyHomeHub is a technology platform offering a variety of services at home. Customers use our platform to book services such as beauty treatments, haircuts, massage therapy, cleaning, plumbing, carpentry, appliance repair, painting, and more. These services are delivered in the comfort of their home and at a time of their choosing. We promise our customers a high-quality, standardized, and reliable service experience.
            </p>
            <p>
                To fulfill this promise, we work closely with our hand-picked service partners, enabling them with technology, training, products, tools, financing, insurance, and branding, helping them succeed and deliver on this promise.
            </p>
            
            <h3>Our Vision</h3>
            <p>
                Deliver home services and solutions like never experienced before.
            </p>

            <div className="stats">
                <div className="stat">5000+<br /><span class="stats-span">Trained Professionals</span></div>
                <div className="stat">1 Million+<br /><span class="stats-span">Happy Customers</span></div>
                <div className="stat">25 <br /> <span class="stats-span">Cities</span> </div>
                <div className="stat">4  <br /> <span class="stats-span">Countries </span></div>
            </div>

            <h3>Our Leadership Team</h3>
            <p>
                Our leadership team is dedicated to ensuring that HandyHomeHub remains at the forefront of the home services industry. With a wealth of experience and a commitment to excellence, we strive to innovate and elevate the customer experience in every aspect of our operations.
            </p>
        </div>
        <br/>
        <br/>
      </>
    );
};

export default AboutUs;
