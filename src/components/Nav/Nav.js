import React from "react";
import { Link } from "react-router-dom";
import styles from "./Nav.module.css";

function Nav() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbar_list}>
        <Link to="/">
          <li className={styles.navlink}>
            <span>Home</span>{" "}
          </li>
        </Link>
        <Link to="/about">
          <li className={styles.navlink}>
            <span>About</span>{" "}
          </li>
        </Link>
        <Link to="/login">
          <li className={styles.navlink}>
            <span>Login</span>{" "}
          </li>
        </Link>
        <Link to="/register">
          <li className={styles.navlink}>
            <span>Register</span>{" "}
          </li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
