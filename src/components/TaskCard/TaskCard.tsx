import styles from "./TaskCard.module.css";

const TaskCard = () => {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>Tasks</h2>

      <div className={styles.taskInput}>
        <input className={styles.inputField} placeholder="Add a new task" />
        <button className={styles.addBtn}>Add</button>
      </div>

      <ul className={styles.taskList}>
        <li className={styles.task}></li>
      </ul>
    </div>
  );
};

export default TaskCard;
