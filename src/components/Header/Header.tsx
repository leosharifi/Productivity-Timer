import styles from "./Header.module.css";
import { useState } from "react";

const Header = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(true);
  const LoadtheDropDownContent = () => {
    const newSate = !isDropdownVisible;
    setIsDropdownVisible(newSate);
    (
      document.querySelector(`.${styles.dropdownContent}`) as HTMLButtonElement
    ).style.display = newSate ? "none" : "flex";
  };

  return (
    <header className={styles.header}>
      <div>
        <h1>Productivity Timer</h1>
      </div>
      <div className={styles.settingsContainer}>
        <button
          className={styles.settingsButton}
          onClick={LoadtheDropDownContent}
        >
          ⚙️ Settings
        </button>
        <div className={styles.dropdownContent}>
          <button className={styles.changeThemeButton}>🎨 Theme</button>
          <button className={styles.changeThemeButton}>🎨 Theme</button>
          <button className={styles.changeThemeButton}>🎨 Theme</button>
          <button className={styles.changeThemeButton}>🎨 Theme</button>
          <button className={styles.changeThemeButton}>🎨 Theme</button>
          <button className={styles.changeThemeButton}>🎨 Theme</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
