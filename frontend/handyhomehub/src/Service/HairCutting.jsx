import './service.css';
import { useState } from 'react';
import Background from '../Assets/hair-cutting.jpg';
import { FaStar } from "react-icons/fa";
import {Link} from 'react-router-dom';

var sectionStyle = {
  width: '100%',
  height: '500px',
  backgroundImage: `url(${Background})`,
  backgroundPosition: 'center',
  backgroundSize:'cover'
};

export default function Haircut() {
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
          <h1>Hair cutting</h1>
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
                    <td>Hair cut only</td><td>&#8377;200-500</td>
                </tr>
                <tr><td>With shaving</td><td>&#8377;400-700</td></tr>
              </tbody>
            </table>
          )}
          <hr />
        </div>
        <div className="terms_condition">
          <h3 className="title_style">Terms & Condition</h3>
          <button className="toggle_btn" onClick={toggleTermsCollapse}>
            {isTermsCollapsed ? 'Show Terms & Conditions' : 'Hide Terms & Conditions'}
          </button>
          {!isTermsCollapsed && (
            <><br/><>You will be refunded if any mistakes happen</></>
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
