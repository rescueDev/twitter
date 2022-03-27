import axios from "axios";
import React, { useState } from "react";
import styles from "./Register.module.css";

function Register() {
  const initialFormData = Object.freeze({
    name: "",
    surname: "",
    email: "",
    username: "",
    password: "",
    avatar: "",
  });

  const [formData, updateFormData] = useState(initialFormData);

  const handleChange = (e) => {
    updateFormData({
      ...formData,

      // Trimming any whitespace
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/api/signup", formData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.register_wrapper}>
      <h3>Register an account</h3>
      <form onSubmit={handleSubmit} action="">
        <div className="form-group">
          <label htmlFor="">Nome</label>
          <input
            name="name"
            type="text"
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Cognome</label>
          <input
            name="surname"
            type="text"
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Email</label>
          <input
            name="email"
            type="email"
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Username</label>
          <input
            name="username"
            type="text"
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Password</label>
          <input
            name="password"
            type="password"
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary mt-3"
          onClick={handleSubmit}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Register;
