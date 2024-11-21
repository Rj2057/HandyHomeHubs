import './service.css';
import { useState } from 'react';
import Background from '../Assets/plumber.jpg';
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';

var sectionStyle = {
  width: '100%',
  height: '500px',
  backgroundImage: `url(${Background})`,
  backgroundPosition: 'center',
  backgroundSize:'cover'
};

export default function Plumber() {
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
          <h1>Plumber</h1>
          <Link to='/date'><button type="button">Book Me</button></Link>
        </div>
        <hr />
        <div className="rate_chart">
          <h3 className="title_style">Rate Chart</h3>
          <button className="toggle_btn" onClick={toggleRateChartCollapse}>
            {isRateChartCollapsed ? 'Show Rate Chart' : 'Hide Rate Chart'}
          </button>
          {!isRateChartCollapsed && (
            <table className="rate_table" cellPadding="15px" border="1px">
              <thead>
                <tr className="highlight">
                  <th>Hours</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>First Hour</td>
                  <td>&#8377; 150</td>
                </tr>
                <tr className="highlight">
                  <td>Next Three Hours</td>
                  <td>&#8377; 150</td>
                </tr>
                <tr>
                  <td>Each Additional Hour</td>
                  <td>&#8377; 80</td>
                </tr>
              </tbody>
            </table>
          )}
          <br/>
          <b className='note'>Cost of Materials Is Extra</b>
          <hr />
        </div>
        <div className="terms_condition">
          <h3 className="title_style">Terms & Condition</h3>
          <button className="toggle_btn" onClick={toggleTermsCollapse}>
            {isTermsCollapsed ? 'Show Terms & Conditions' : 'Hide Terms & Conditions'}
          </button>
          {!isTermsCollapsed && (
            <ol>
              <li>
                HandyhelpHub charges for unit of 1 hour of service initially, and
                every 60 minutes thereafter.
              </li>
              <li>
                Material charges are additional. Customer can either purchase the
                material directly or request the service partner to procure it. Time for
                material procurement will be charged in the final bill.
              </li>
              <li>
                If the user decides not to proceed with the service delivery or
                reschedules the service after the partner arrives at the user's premises,
                Rs. 150 will be charged as inspection charges.
              </li>
              <li>
                An additional amount of Rs 150 will be charged for night services from
                07:00 PM to 07:00 AM.
              </li>
              <li>
                Our service partner will help you with a quotation in case of long hour
                work schedules. Please confirm the quotation before initiating work to avoid
                any conflict on service completion. In case you do not want to continue
                service, we may charge Rs. 150 as inspection charge.
              </li>
              <li>
                We offer up to 7 days warranty on the service in case of recurring issues
                of the same nature where repair was done.
              </li>
            </ol>
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
