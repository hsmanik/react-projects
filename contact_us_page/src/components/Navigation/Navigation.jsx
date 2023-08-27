import styles from "./Navigation.module.css";
export const Navigation = () => {
  return (
    <nav className={`${styles.nav} container`}>
      <div className="logo">
        <img className={`${styles.image}`} src="/jerry.jpeg" alt="logo" />
      </div>

      <ul>
        <li> Home</li>
        <li> About</li>
        <li> Contact</li>
      </ul>
    </nav>
  );
};
