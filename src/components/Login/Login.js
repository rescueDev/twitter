import React, { useState } from "react";
import styles from "./Login.module.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export default function Login() {
  const initialFormData = Object.freeze({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

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
      const response = await axios.post(
        "http://localhost:3001/api/signin",
        formData
      );

      console.log(response);

      //login ok
      if (response.status == 200) {
        //save cookie from express=session
        let expires = new Date();
        expires.setTime(expires.getTime() + response.data.expires_in * 1000);

        Cookies.set("user", response.data.user, expires);
        navigate("/");
      } else {
        //redirect
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit} className="row">
        <div className={styles.login_container}>
          <h3>Login</h3>
          <div className="form-group">
            <label htmlFor="email"></label>
            <input
              type="text"
              name="email"
              className="form-control"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password"></label>
            <input
              type="password"
              name="password"
              className="form-control"
              onChange={handleChange}
            />
          </div>
          <button className="btn btn-primary button_login mt-3" type="submit">
            Login
          </button>

          <small>
            If you do not have an account
            <Link to="/register">Register one</Link>
          </small>
        </div>
      </form>
    </div>
  );
}
