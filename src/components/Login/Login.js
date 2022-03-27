import React from "react";
import styles from "./Login.module.css";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Login() {
  const signIn = async () => {
    try {
      await axios.post("http://localhost:3001/api/signin");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.wrapper}>
      <form onSubmit={signIn} className="row">
        <div className={styles.login_container}>
          <h3>Login</h3>
          <div className="form-group">
            <label htmlFor="email"></label>
            <input type="text" id="email" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="password"></label>
            <input type="password" id="password" className="form-control" />
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
