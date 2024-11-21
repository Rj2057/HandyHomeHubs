import React, { useState } from "react";
import axios from "axios";
import "./Adress.css";

const AddressForm = () => {
  const [address, setAddress] = useState({
    type: "",
    houseName: "",
    area: "",
    phoneNumber: "", // Add phoneNumber to state
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAddress((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    if (!address.houseName || !address.area || !address.phoneNumber) {
      alert("Please fill all required fields!");
      return;
    }
  
    try {
      const token = localStorage.getItem("auth-token");
  
      if (!token) {
        alert("You need to log in first!");
        return;
      }
  
      const response = await axios.put(
        "http://localhost:5000/update_address",
        {
          address: {
            type: address.type,
            houseName: address.houseName,
            area: address.area,
          },
          phoneNumber: address.phoneNumber, // Ensure phoneNumber is included here
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
  
      if (response.data.success) {
        alert("Address saved successfully!");
        setAddress({ type: "", houseName: "", area: "", phoneNumber: "" }); // Reset the form
      } else {
        alert(response.data.errors || "Failed to update address.");
      }
    } catch (error) {
      console.error("Error updating address:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="address-container">
      <h2 className="sub-header">CHOOSE ADDRESS</h2>
      <div className="form-group">
        <input
          type="text"
          name="type"
          placeholder="Home, Office etc. (Optional)"
          value={address.type}
          onChange={handleInputChange}
          className="input-field"
        />
        <input
          type="text"
          name="houseName"
          placeholder="House Name / Apartment Block"
          value={address.houseName}
          onChange={handleInputChange}
          className="input-field"
        />
        <input
          type="text"
          name="area"
          placeholder="Select Area"
          value={address.area}
          onChange={handleInputChange}
          className="input-field"
        />
        <input
          type="text"
          name="phoneNumber" // New input for phone number
          placeholder="Phone Number"
          value={address.phoneNumber}
          onChange={handleInputChange}
          className="input-field"
          required // Mark as required if needed
        />
      </div>
      <button className="save-button" onClick={handleSubmit}>
        Save & Proceed
      </button>
    </div>
  );
};

export default AddressForm;