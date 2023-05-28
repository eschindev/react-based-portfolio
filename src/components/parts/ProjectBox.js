import React from "react";

export default function ProjectBox(props) {
  return (
    <div className="card p-2 m-3 col-11 col-md-5" style={{ maxWidth: "600px" }}>
      <div className="img-container">
        <img
          class="card-img-top rounded"
          alt={props.name}
          src={props.image}
          style={{
            border: "1px solid #ddd",
          }}
        />
      </div>
      <a href={props.deployed} target="_blank" rel="noreferrer">
        <div className="card-img-overlay card-inverse">
          <h3>
            <strong>{props.name}</strong>
          </h3>

          <strong>
            <a href={props.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </strong>
        </div>
      </a>
    </div>
  );
}
