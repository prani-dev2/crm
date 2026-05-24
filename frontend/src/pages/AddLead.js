import { useState } from "react";

import axios from "axios";

function AddLead() {

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    status: "New",
    assignedTo: "Rahul Sharma"
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const addLead = async () => {

    console.log("Button Clicked");

    console.log(formData);

    try {

      const response = await axios.post(
        "https://crm-backend-8xv7.onrender.com/api/leads",
        formData
      );

      console.log(response.data);

      alert("Lead Added Successfully");

      setFormData({
        name: "",
        company: "",
        email: "",
        status: "New",
        assignedTo: "Rahul Sharma"
      });

    } catch (error) {

      console.log("FULL ERROR:");

      console.log(error);

      alert("Error Adding Lead");
    }
  };

  return (

    <div>

      <h1>Add New Lead</h1>

      <div className="form-container">

        <input
          type="text"
          name="name"
          placeholder="Client Name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="text"
          name="company"
          placeholder="Company Name"
          value={formData.company}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Client Email"
          value={formData.email}
          onChange={handleChange}
        />

        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
        >
          <option>New</option>
          <option>Interested</option>
          <option>Closed</option>
        </select>

        <select
          name="assignedTo"
          value={formData.assignedTo}
          onChange={handleChange}
        >

          <option>
            Rahul Sharma
          </option>

          <option>
            Priya Verma
          </option>

          <option>
            Amit Patel
          </option>

          <option>
            Sneha Reddy
          </option>

        </select>

        <button onClick={addLead}>
          Add Lead
        </button>

      </div>

    </div>
  );
}

export default AddLead;