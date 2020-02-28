import React from "react";
import styles from "./Navbar.module.css";

const Navbar = props => (
  <div className={styles.navigationContainer}>
    <a href="Dashboard.html">Personal Project Management</a>
    <a href="/dashboard">Dashboard</a>
    <a href="register.html">Sign Up</a>
    <a href="login.html">Login</a>
  </div>
);

export default Navbar;
