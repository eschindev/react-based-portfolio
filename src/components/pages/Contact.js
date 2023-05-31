import React, { useState } from "react";

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

  function submitForm(e) {
    e.preventDefault();
    alert("Submitted!");
    setFormInfo({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  }

  function handleInputChange(e) {
    setFormInfo({ ...formInfo, [e.target.name]: e.target.value });
  }

  function handleBlur(field) {
    if (formInfo[field] === "") {
      setShowRequired({ ...showRequired, [field]: true });
    } else {
      setShowRequired({ ...showRequired, [field]: false });
    }
  }

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
            <div className="invalid-feedback">Name is required!</div>
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
            <div className="invalid-feedback">Email is required!</div>
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
            <div className="invalid-feedback">Subject is required!</div>
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
            <div className="invalid-feedback">Message is required!</div>
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
