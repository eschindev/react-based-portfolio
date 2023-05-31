import React, { useState, useEffect } from "react";

export default function Contact() {
  const [formInfo, setFormInfo] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [showRequired, setShowRequired] = useState({
    name: false,
    email: false,
    subject: false,
    message: false,
  });

  const [validEmail, setValidEmail] = useState(false);

  function submitForm(e) {
    e.preventDefault();
    console.log(
      formInfo.name,
      formInfo.email,
      formInfo.subject,
      formInfo.message
    );
    if (
      !formInfo.name ||
      !formInfo.email ||
      !formInfo.subject ||
      !formInfo.message
    ) {
      alert("Please fill all required fields.");
    } else if (!validEmail) {
      alert("Please enter a valid email address.");
    } else {
      alert("Submitted!");
      setFormInfo({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }
  }

  function handleInputChange(e) {
    setFormInfo({ ...formInfo, [e.target.name]: e.target.value });
  }

  function handleBlur(field) {
    if (!formInfo[field]) {
      setShowRequired({ ...showRequired, [field]: true });
      if (field === "email") {
        setValidEmail(true);
      }
    } else {
      setShowRequired({ ...showRequired, [field]: false });
    }

    if (field === "email" && formInfo.email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailRegex.test(formInfo.email)) {
        setValidEmail(true);
      } else {
        setValidEmail(false);
      }
    }
  }

  useEffect(() => {
    console.log("validEmail: " + validEmail);
  }, [validEmail]);

  useEffect(() => {
    console.log(formInfo);
  }, [formInfo]);

  return (
    <div className="content-container">
      <h2>Contact Me</h2>
      <hr />
      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className={`form-control mb-2 ${
              showRequired.name ? "is-invalid" : ""
            }`}
            onChange={handleInputChange}
            onBlur={() => handleBlur("name")}
            id="name"
            name="name"
            value={formInfo.name}
            placeholder="Enter name"
          />
          {showRequired.name && (
            <div className="mb-2 invalid-feedback">Name is required!</div>
          )}
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className={`form-control mb-2 ${
              showRequired.email ? "is-invalid" : ""
            }`}
            onChange={handleInputChange}
            onBlur={() => handleBlur("email")}
            id="email"
            name="email"
            value={formInfo.email}
            placeholder="Enter email"
          />
          {showRequired.email && (
            <div className="mb-2 invalid-feedback">Email is required!</div>
          )}
          {!validEmail && (
            <div className="mb-2 invalid-feedback">Invalid email format!</div>
          )}
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            className={`form-control mb-2 ${
              showRequired.subject ? "is-invalid" : ""
            }`}
            onChange={handleInputChange}
            onBlur={() => handleBlur("subject")}
            id="subject"
            name="subject"
            value={formInfo.subject}
            placeholder="Enter subject"
          />
          {showRequired.subject && (
            <div className="mb-2 invalid-feedback">Subject is required!</div>
          )}
          <label htmlFor="message">Message</label>
          <textarea
            className={`form-control mb-2 ${
              showRequired.message ? "is-invalid" : ""
            }`}
            onChange={handleInputChange}
            onBlur={() => handleBlur("message")}
            id="message"
            name="message"
            value={formInfo.message}
            rows="3"
          ></textarea>
          {showRequired.message && (
            <div className="mb-2 invalid-feedback">Message is required!</div>
          )}
          <button
            type="submit"
            className="btn btn-primary"
            onClick={submitForm}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
