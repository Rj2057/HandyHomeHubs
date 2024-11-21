import './service.css';
import { useState } from 'react';
import Background from '../Assets/Pest.jpg';
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';

var sectionStyle = {
  width: '100%',
  height: '500px',
  backgroundImage: `url(${Background})`,
  backgroundPosition: 'center',
  backgroundSize:'cover'
};

export default function Pestcontrol() {
  const [isRateChartCollapsed, setIsRateChartCollapsed] = useState(true);
  const [isTermsCollapsed, setIsTermsCollapsed] = useState(true);
  const [isreveiwcollapsed,setisreveiwcollapsed]=useState(false);

  const toggleRateChartCollapse = () => {
    setIsRateChartCollapsed(!isRateChartCollapsed);
  };

  const toggleTermsCollapse = () => {
    setIsTermsCollapsed(!isTermsCollapsed);
  };
  
  const toglereviewcollapsed =()=>{
    setisreveiwcollapsed(!isreveiwcollapsed)
  }
  const ratings=(a)=>
  {
    return Array.from({ length: a }, (_, index) => <FaStar key={index} />);
  }

  return (
    <div>
      <br />
      <br />
      <br />
      <section style={sectionStyle}></section>
      <br />
      <br />
      <div className="service_box">
        <div className="book_me">
          <h1>Pest Control</h1>
          <Link to='/date'><button type="button">Book Me</button></Link>
        </div>
        <hr />
        <div className="rate_chart">
          <h3 className="title_style">Rate Chart</h3>
          <button className="toggle_btn" onClick={toggleRateChartCollapse}>
            {isRateChartCollapsed ? 'Show Rate Chart' : 'Hide Rate Chart'}
          </button>
          {!isRateChartCollapsed && (
            <><br/><>Service rates starts at ₹999</></>
          )}
          <hr />
        </div>
        <div className="terms_condition">
          <h3 className="title_style">Terms & Condition</h3>
          <button className="toggle_btn" onClick={toggleTermsCollapse}>
            {isTermsCollapsed ? 'Show Terms & Conditions' : 'Hide Terms & Conditions'}
          </button>
          {!isTermsCollapsed && (
            <><br/><>• The Service Partners may visit your location or will call you to get detailed requirements, we offer all types of pest control services.<br/>

            • Service Partner may require a minimum of 24 hours to schedule the delivery, please plan your service order accordingly.<br/>
            
            • There may be variations due to the area and type of pest control required. You have to provide the detailed requirements with the Partner on call to get the final estimate.<br/>
            
            • Customer will have to arrange a high stool or ladder for the service if there is work at height involved, as required.<br/>
            
            • Service does not include moving, rearranging, or shielding items and objects in the building. It is up to the customer to make necessary arrangements before the service is scheduled to begin. <br/>
            
            • Any area to be avoided or chemicals not to be used should be communicated to the service team before the work starts.<br/>
            
            • Warranty for the service is given by the respective service providers and it will vary from service to service.<br/>
            
            • Certain service requires two or more visit for a complete solution, which will be informed prior by the service team. <br/>
            
            • For the best results and longevity post-service, follow the advice given by the pest control team.</></>
          )}
        </div>
      </div>
      <div className="customer_reviews">
          <div className='title_style'>
            <button className='toggle_btn' onClick={toglereviewcollapsed} >{isreveiwcollapsed?"Hide Customer Reveiws":"Customer Reviews"}</button>
            {isreveiwcollapsed && 
            (
                <div className='review_box'>
                  <div className='review'>
                    <h3>Rajath Bhat</h3>
                    {ratings(4)}
                  </div>
                  <div className='review'>
                    <h3>Rachan Devadiga</h3>
                    {ratings(5)}
                  </div>
                  <div className='review'>
                    <h3>Pratham M K</h3>
                    {ratings(4)}
                  </div>
                </div>
            
            )}
          </div>
      </div>
    </div>
  );
}
