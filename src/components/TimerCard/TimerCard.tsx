import styles from "./TimerCard.module.css";

const TimerCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <span>Session</span>

        <label className={styles.themeToggle}>
          <input type="checkbox" />
          <span className={styles.toggle}></span>
          <span className={styles.labelText}>Light</span>
        </label>
      </div>

      <div className={styles.timerDisplay}>25:00</div>

      <div className={styles.buttons}>
        <button className={styles.startBtn}>Start</button>
        <button className={styles.startBtn}>Stop</button>
        <button className={styles.resetBtn}>Reset</button>
      </div>
    </div>
  );
};

export default TimerCard;
