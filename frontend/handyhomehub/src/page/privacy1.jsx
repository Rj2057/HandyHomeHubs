import React from 'react';
import './privacy.css'; // Ensure this file is in the same directory


const PrivacyPolicy = () => {
  return (
    <>
    <div className="privacyContainer">
      <h1 className="privacyTitle">Privacy Policy</h1>
      <p className="privacyDate">Last updated: 15 November, 2024</p>

      <div className="privacySection">
        <h2>1. Data Collection</h2>
        <p>
          HandyHomeService collects essential data such as contact information, location, device details, and usage data to improve user experience and services.
        </p>
      </div>

      <div className="privacySection">
        <h2>2. Use of Data</h2>
        <p>
          Collected data enables us to create accounts, process service requests, customize user experience, process payments, and ensure service quality.
        </p>
      </div>

      <div className="privacySection">
        <h2>3. Third-Party Services</h2>
        <p>
          The platform may include links to third-party sites or plug-ins. These are not under our control, and we advise users to review third-party privacy policies separately.
        </p>
      </div>

      <div className="privacySection">
        <h2>4. Cookies</h2>
        <p>
          HandyHomeService uses cookies to store user preferences, track site usage, and enhance platform performance. Users may manage cookie settings via their browser.
        </p>
      </div>

      <div className="privacySection">
        <h2>5. Data Sharing</h2>
        <p>
          We share limited data with third-party service providers, vendors, or service professionals to facilitate services but require strict compliance with data security standards.
        </p>
      </div>

      <div className="privacySection">
        <h2>6. Security Measures</h2>
        <p>
          We employ measures like encryption and password protection to secure user data, though users are responsible for safeguarding their account credentials.
        </p>
      </div>

      <div className="privacySection">
        <h2>7. User Rights</h2>
        <p>
          Users can access and update personal data or request account deletion by contacting our support team. Changes to communication preferences are available in the user account settings.
        </p>
      </div>

      <div className="privacySection">
        <h2>8. Data Retention</h2>
        <p>
          Personal data is retained for the period necessary to fulfill the service, followed by secure deletion or anonymization, per legal standards.
        </p>
      </div>

      <div className="privacySection">
        <h2>9. User Content</h2>
        <p>
          Content users share publicly (e.g., reviews) may be visible to all platform visitors and should comply with applicable laws.
        </p>
      </div>

      <div className="privacySection">
        <h2>10. Policy Updates</h2>
        <p>
          We may periodically update this Policy, notifying users via the app or email. Continued use implies acceptance of updates.
        </p>
      </div>
    </div>
    <br/>
    <br/>
    
    </>
  );
};

export default PrivacyPolicy;
