import React, { useState } from "react";

export default function Contact() {
  const [formInfo, setFormInfo] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
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

  return (
    <div className="content-container">
      <h2>Contact Me</h2>
      <hr />
      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control mb-2"
            onChange={handleInputChange}
            id="name"
            name="name"
            value={formInfo.name}
            placeholder="Enter name"
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control mb-2"
            onChange={handleInputChange}
            id="email"
            name="email"
            value={formInfo.email}
            placeholder="Enter email"
          />
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            className="form-control mb-2"
            onChange={handleInputChange}
            id="subject"
            name="subject"
            value={formInfo.subject}
            placeholder="Enter subject"
          />
          <label htmlFor="message">Message</label>
          <textarea
            className="form-control mb-2"
            onChange={handleInputChange}
            id="message"
            name="message"
            value={formInfo.message}
            rows="3"
          ></textarea>
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
