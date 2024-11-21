// TermsAndConditions.js
import React from "react";
import "./term&condition.css";

const TermsAndConditions = () => {
  return (
    <>
    <div className="terms-container">
      <h2>Terms and Conditions</h2>
      
      <div className="clause">
        <h3>1. User Content and Responsibility</h3>
        <p>
          Users must ensure that all content shared does not infringe upon the rights of others or include harmful, offensive, or unlawful materials.
        </p>
      </div>
      
      <div className="clause">
        <h3>2. Service Use and Restrictions</h3>
        <p>
          Users agree not to misuse our services by engaging in activities like copying content, sending harmful code, or attempting to access unauthorized areas.
        </p>
      </div>
      
      <div className="clause">
        <h3>3. Intellectual Property</h3>
        <p>
          All intellectual property rights, including logos, text, and software, are owned or licensed by HandyHomeHubs. Use of services is limited to personal, non-commercial purposes.
        </p>
      </div>
      
      <div className="clause">
        <h3>4. Limitations of Liability</h3>
        <p>
          HandyHomeHubs is not responsible for any damage or loss arising from use or inability to use our services, including data, revenue, or business loss.
        </p>
      </div>
      
      <div className="clause">
        <h3>5. Independent Service Providers</h3>
        <p>
          HandyHomeHubs connects users with professionals and does not guarantee their performance. Users engage providers at their own risk.
        </p>
      </div>
      
      <div className="clause">
        <h3>6. User Data Protection</h3>
        <p>
          User data is managed responsibly. Users agree not to bypass HandyHomeHubs’ platform to engage providers independently.
        </p>
      </div>
      
      <div className="clause">
        <h3>7. Termination</h3>
        <p>
          HandyHomeHubs reserves the right to terminate services for users who violate these terms. Users may also terminate accounts at any time.
        </p>
      </div>
      
      <div className="clause">
        <h3>8. Governing Law</h3>
        <p>
          This agreement is governed by the laws of [Your Country/Region]. Disputes will be resolved by arbitration or local courts as agreed.
        </p>
      </div>
    </div>
    <br/>
    <br/>

    </>
  );
};

export default TermsAndConditions;
