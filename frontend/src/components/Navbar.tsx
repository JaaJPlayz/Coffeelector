import { Link } from "react-router-dom";
import styles from "./styles/navbar.module.css";

export const Navbar = () => {
  return (
    <div className={styles["Navbar"]}>
      <div className={styles["WebsiteLogo"]}>
        <img src="coffeeLogo.png" alt="CoffeeLector Logo"/>
        <Link to="/">Coffeelector</Link>
      </div>
      <div className="Links">
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/games">Games</Link>
      </div>
    </div>
  );
};
