import React, { useState } from "react";
import * as Yup from "yup";

export default function FormUsingYup() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: {
      street: "",
      city: "",
      zipCode: "",
    },
    skills: [],
  });

  const [errors, setErrors] = useState({});

  const validationSchema = Yup.object({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    address: Yup.object({
      street: Yup.string().required("Street is required"),
      city: Yup.string().required("City is required"),
      zipCode: Yup.string().required("Zipcode is required"),
    }),
    skills: Yup.array()
      .min(1, "Select at least one skill")
      .required("Skill is required"),
  });
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await validationSchema.validate(formData);
      console.log("Form Submitted", formData);
    } catch (error) {
      const newErrors = {};

      error.inner.forEach((err) => {
        newErrors[err.path] = err.message;
      });

      setErrors(newErrors);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name.includes(".")) {
      const [mainKey, subKey] = name.split(".");
      setFormData({
        ...formData,
        [mainKey]: {
          ...formData[mainKey],
          [subKey]: value,
        },
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSkillsChange = (e) => {
    const { value } = e.target;
    const newSkills = formData.skills.includes(value)
      ? formData.skills.filter((skill) => skill !== value)
      : [...formData.skills, value];
    setFormData({
      ...formData,
      skills: newSkills,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name:</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
        <div className="error">{errors.firstName}</div>
      </div>

      <div>
        <label>Last Name:</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
        <div className="error">{errors.lastName}</div>
      </div>

      <div className="address">
        <h3>Address</h3>
        <label>Street:</label>
        <input
          type="text"
          name="address.street"
          value={formData.address.street}
          onChange={handleChange}
        />

        <div className="error">{errors["address.street"]}</div>

        <label>City:</label>
        <input
          type="text"
          name="address.city"
          value={formData.address.city}
          onChange={handleChange}
        />

        <div className="error">{errors["address.city"]}</div>

        <label>ZipCode:</label>
        <input
          type="text"
          name="address.zipCode"
          value={formData.address.zipCode}
          onChange={handleChange}
        />

        <div className="error">{errors["address.zipCode"]}</div>
      </div>

      <div className="skills">
        <h3>Skills</h3>
        <label>
          <input
            type="checkbox"
            value="coding"
            checked={formData.skills.includes("coding")}
            onChange={handleSkillsChange}
          />
          Coding
        </label>
        <label>
          <input
            type="checkbox"
            value="playing"
            checked={formData.skills.includes("playing")}
            onChange={handleSkillsChange}
          />
          Playing
        </label>
        <label>
          <input
            type="checkbox"
            value="dancing"
            checked={formData.skills.includes("dancing")}
            onChange={handleSkillsChange}
          />
          Dancing
        </label>
        <div className="error">{errors.skills}</div>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}
