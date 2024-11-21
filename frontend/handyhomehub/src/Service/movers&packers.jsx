import './service.css';
import { useState } from 'react';
import Background from '../Assets/mover and packers.jpg';
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';

var sectionStyle = {
  width: '100%',
  height: '500px',
  backgroundImage: `url(${Background})`,
  backgroundPosition: 'center',
  backgroundSize:'cover'
};

export default function Packers() {
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
          <h1>Movers And Packers</h1>
          <Link to='/date'><button type="button">Book Me</button></Link>
        </div>
        <hr />
        <div className="rate_chart">
          <h3 className="title_style">Rate Chart</h3>
          <button className="toggle_btn" onClick={toggleRateChartCollapse}>
            {isRateChartCollapsed ? 'Show Rate Chart' : 'Hide Rate Chart'}
          </button>
          {!isRateChartCollapsed && (
            <><br/><>Our service partner will send you a detailed quote based on your requirements. Work will be done on approval of quote</></>
          )}
          <hr />
        </div>
        <div className="terms_condition">
          <h3 className="title_style">Terms & Condition</h3>
          <button className="toggle_btn" onClick={toggleTermsCollapse}>
            {isTermsCollapsed ? 'Show Terms & Conditions' : 'Hide Terms & Conditions'}
          </button>
          {!isTermsCollapsed && (
            <><br/><>Partner may require minimum 24-48 hours to schedule the delivery based on distance and traffic conditions, please plan your service order accordingly.
            Partner may require site visit in some cases to provide you the accurate rates.
            You are requested to share the number of items and delivery location during the call with our partner
            Charges may vary based on the type of packaging preferred, please contact the partner for more details.</></>
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
