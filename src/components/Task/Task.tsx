import React from "react";
import styles from "./Task.module.css";
import AddTask from "./AddTask/AddTask";

const Task = () => {
  return (
    <div className={styles.taskContainer}>
      <h2>Task</h2>
      <AddTask />
    </div>
  );
};

export default Task;
