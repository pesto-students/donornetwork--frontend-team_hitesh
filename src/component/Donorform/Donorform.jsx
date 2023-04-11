import { useState } from "react";
import "./Donorform.css";

const Donorform = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    bloodGroup: "",
    pinCode: "",
    tattooed: "",
    hivPositive: "",
    covidVaccine: "",
    birthdate: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitting(true);
    setFormError("");

    fetch("https://example.com/api/submit-form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          // form data was successfully submitted
          console.log("Form data submitted successfully");
        } else {
          // handle server errors or validation errors
          response.json().then((error) => {
            setFormError(error.message);
          });
        }
      })
      .catch((error) => {
        // handle network errors
        setFormError("An error occurred while submitting the form");
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <>
      <h1>Be A donor</h1>

      <legend>
        <h3>Details</h3>
      </legend>

      <div className="donor-form-container">
        <form onSubmit={handleSubmit}>
          <div className="firsthalf">
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              Phone:
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              City:
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              Blood Group:
              <select>
                <option value=""></option>
                <option value="1"> A+</option>
                <option value="2"> A-</option>
                <option value="3"> B+</option>
                <option value="4"> B-</option>
                <option value="5"> AB+</option>
                <option value="6"> AB-</option>
                <option value="7"> O+</option>
                <option value="8"> O-</option>
                <option value="9"> A1+</option>
                <option value="10"> A1-</option>
                <option value="11"> A2+</option>
                <option value="12"> A2-</option>
                <option value="13"> A1B+</option>
                <option value="14"> A1B-</option>
                <option value="15"> A2B+</option>
                <option value="16"> A2B-</option>
                <option value="17"> Bombay Blood Group</option>
                <option value="18"> INRA</option>
                <option value="19"> Don't Know</option>
              </select>
            </label>
            <br />
            <label>
              Pin Code:
              <input
                type="text"
                name="pinCode"
                value={formData.pinCode}
                onChange={handleChange}
              />
            </label>
            <br />
          </div>
          <div className="secondhalf">
            <label>
              Did you get tattooed in past 12 months?
              <select
                name="tattooed"
                value={formData.tattooed}
                onChange={handleChange}
              >
                <option value="">Select an option</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </label>
            <br />
            <label>
              Have you ever tested positive for HIV?
              <select
                name="hivPositive"
                value={formData.hivPositive}
                onChange={handleChange}
              >
                <option value="">Select an option</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </label>
            <br />
            <label>
              Have you taken Covid-19 vaccine?
              <select
                name="covidVaccine"
                value={formData.covidVaccine}
                onChange={handleChange}
              >
                <option value="">Select an option</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </label>
            <br />
            <label>
              Birthdate:
              <input
                type="date"
                name="birthdate"
                value={formData.birthdate}
                onChange={handleChange}
              />
            </label>
          </div>

          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};
export default Donorform;
