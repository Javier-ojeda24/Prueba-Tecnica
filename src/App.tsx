import React from "react";
import { Link } from "react-router-dom";
import styles from "./App.module.css";

const App: React.FC = () => {
  return (
    <div className={styles.contenedor}>
      <Link to={"/tasks"}>
        <button className={styles.btn}>Tasks</button>
      </Link>
      <Link to={"/list"}>
        <button className={styles.btn}>List</button>
      </Link>
    </div>
  );
};

export default App;
