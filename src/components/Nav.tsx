
import styles from "../App.module.css";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <div className={styles.nav}>
      <Link to={"/list"}>List</Link>
      <Link to={"/tasks"}>Tasks</Link>
    </div>
  );
};
