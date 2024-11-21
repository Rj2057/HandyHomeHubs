import './home.css';
import electricalImg from '../Assets/electrical.jpg'; // Importing image directly
import plumberImg from '../Assets/plumber.jpg';
import CarpenterImg from '../Assets/carpenter.jpg';
import fullHomeCleaningImg from '../Assets/full-house-cleaning.jpg';
import kichenCleaningImg from '../Assets/Kichen-cleaning.jpg';
import hairCuttingImg from '../Assets/hair-cutting.jpg';
import applianceServiceImg from '../Assets/Appliance.jpg';
import pestImg from '../Assets/Pest.jpg';
import movePackImg from '../Assets/mover and packers.jpg';
import homeSecurityImg from '../Assets/Home security.jpg';
import expertTechImg from '../Assets/Expert Technicians & Professionals.jpg';
import reliableTransparentImg from '../Assets/Reliable & Transparent Service.png';
import customerCentricImg from '../Assets/Customer-Centric Approach.png';
import comprehensiveRangeImg from '../Assets/Comprehensive Range of Services.jpg';
import instaImg from '../Assets/instagram.jpg';
import facebookImg from '../Assets/facebook.jpg';
import xImg from '../Assets/x.png';
import {Link} from 'react-router-dom'


export default function Home() {
  return (
    <>
      <h1 className='serviceSelect m-4'>What are you looking for?</h1>
      <div className="serviceList d-flex flex-row ">
        <Link to="/electrician">
        <div className="serviceItem shadow">
          <img src={electricalImg} alt="Electrical service" className="service-image" />
          <p className='service_link'>Electrician</p>
        </div>
        </Link>
        <Link to="/plumber">
        <div className="serviceItem shadow">
          <img src={plumberImg} alt="Plumber service" className="service-image" />
          <p>Plumber</p>
        </div>
        </Link>
        <Link to="/carpenter">
        <div className="serviceItem shadow">
          <img src={CarpenterImg} alt="Carpenter service" className="service-image" />
          <p>Carpenter</p>
        </div>
        </Link>
        <Link to="/fullhomecleaning">
        <div className="serviceItem shadow">
          <img src={fullHomeCleaningImg} alt="Full Home cleaning service" className="service-image" />
          <p>Full Home Cleaning</p>
        </div>
        </Link>
        <Link to="/haircut">
        <div className="serviceItem shadow">
          <img src={hairCuttingImg} alt="Hair Cutting service" className="service-image" />
          <p>Hair Cutting</p>
        </div>
        </Link>
      </div>
      <div className="serviceList d-flex flex-row "> 
      <Link to="/appliance">
      <div className="serviceItem shadow">
          <img src={applianceServiceImg} alt="Appliance Services service" className="service-image" />
          <p>Appliance Services</p>
        </div>
        </Link>
        <Link to="/kitchen">
        <div className="serviceItem shadow">
          <img src={kichenCleaningImg} alt="Kichen cleaning service" className="service-image" />
          <p>Kichen Cleaning</p>
        </div>
        </Link>
        <Link to="/pestcontrol">
        <div className="serviceItem shadow">
          <img src={pestImg} alt="Pest control service" className="service-image" />
          <p>Pest Controls</p>
        </div>
        </Link>
        <Link to="/movers">
        <div className="serviceItem shadow">
          <img src={movePackImg} alt="Moving and Packing service" className="service-image" />
          <p>Movers and Packers</p>
        </div>
        </Link>
        <Link to="/homesecurity">
        <div className="serviceItem shadow">
          <img src={homeSecurityImg} alt="Home Security service" className="service-image" />
          <p>Home Security</p>
        </div>
        </Link>
      </div>
      <div className="WCU ">
        <h1 className="wcu-heading">Why Choose Us</h1>
          <div className="d-flex flex-row">
            <div className="wcu-items-1 shadow ">
              <img src={expertTechImg} alt="Expert Technicians & Professionals" className="Tech-Professional shadow"/>
              <h1 className="wcu-items-heading m-2">Expert Technicians & Professionals</h1>
              <p className="wcu-items-para">Our team consists of certified, skilled 
                professionals with extensive experience in 
                their fields, from plumbing to electrical 
                work and beyond. We guarantee quality workmanship, 
                and our experts are committed to delivering 
                exceptional results on every job.
              </p>
            </div>
            <div className="wcu-items shadow">
              <img src={reliableTransparentImg} alt="Reliable & Transparent Service" className="Tech-Professional shadow"/>
              <h1 className="wcu-items-heading m-2">Reliable & Transparent Service</h1>
              <p className="wcu-items-para">
                We believe in transparent pricing and clear communication, 
                so there are no hidden fees or surprises. Our online booking 
                system makes scheduling easy, and our commitment to punctuality 
                means we’re always on time, every time.
              </p>
            </div>
            <div className="wcu-items shadow">
              <img src={comprehensiveRangeImg} alt="Comprehensive Range of Services" className="Tech-Professional shadow"/>
              <h1 className="wcu-items-heading m-2">Comprehensive Range of Services</h1>
              <p className="wcu-items-para">
              From quick repairs to major home projects, HandyHomeHub 
              is a one-stop solution for all your home service needs. 
              We handle everything from minor fixes to complex installations, 
              ensuring you can rely on us for any job, big or small.
              </p>
            </div>
            <div className="wcu-items shadow">
              <img src={customerCentricImg} alt="Customer-Centric Approach" className="Tech-Professional shadow"/>
              <h1 className="wcu-items-heading m-2">Customer-Centric Approach</h1>
              <p className="wcu-items-para">
                Your satisfaction is our top priority. 
                We take pride in our attentive, friendly 
                customer service, offering a satisfaction
                guarantee on all services. Our team is 
                dedicated to resolving any concerns and 
                ensuring your home is in top shape.
              </p>
            </div>
           
          </div>
      </div>
      <div classNamde="follow-us">
          <h1 className="d-flex flex-row justify-content-center"> Follow Us</h1>
          <div className="fui d-flex flex-row justify-content-center">
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"> <img src={facebookImg} alt="Facebook Icon" className="icons"/></a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><img src={instaImg} alt="Instagram Icon" className="icons"/></a>
          <a href="https://x.com/home?lang=en" target="_blank" rel="noreferrer"><img src={xImg} alt="X Icon" className="icons"/></a> 
          </div>
      </div>
      <br/>
      <br/>
    </>
  );
}
