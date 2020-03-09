import React from "react";
import styles from "./Navbar.module.css";

const Navbar = props => (
  <div className={styles.navigationContainer}>
    <div className={styles.navigationContainerLeft}>
      <a href="Dashboard.html">Personal Project Management</a>
      <a href="/dashboard">Dashboard</a>
    </div>
    <div className={styles.navigationContainerRight}>
      <a href="register.html">Sign Up</a>
      <a href="login.html">Login</a>
    </div>
  </div>
);

export default Navbar;
