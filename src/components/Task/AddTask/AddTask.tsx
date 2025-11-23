import styles from "./AddTask.module.css";
import { useState, useEffect } from "react";

const AddTask = () => {
  const [inputVal, setInputVal] = useState("");
  const [task, setTask] = useState<string[]>([]);

  //Save the tasks into LocalStorage
  useEffect(() => {
    const savedTask = localStorage.getItem("tasks");
    if (savedTask) {
      setTimeout(() => {
        setTask(JSON.parse(savedTask));
      }, 0);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(task));
  }, [task]);
  const addTasktoDOM = () => {
    if (inputVal.trim() === "") return;
    setTask([...task, inputVal]);
    setInputVal("");
  };
  const deleteTask = (indextoDelete: number) => {
    setTask(task.filter((_, index) => index !== indextoDelete));
  };
  return (
    <div className={styles.taskSubmitionContainer}>
      <div className={styles.taskSubmiter}>
        <label htmlFor="task-input">
          Task Name:
          <input
            type="text"
            id="task-input"
            placeholder="e.g., Buy groceries or finish report"
            value={inputVal}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setInputVal(e.target.value)
            }
            onKeyDown={(e) => e.key === "Enter" && addTasktoDOM()}
          />
        </label>
        <button onClick={addTasktoDOM}>Add Task</button>
      </div>

      <div className={styles.taskContent}>
        {task.length === 0 ? (
          <p>No Task sumbitted yet!</p>
        ) : (
          task.map((taskItem, index) => (
            <li key={index}>
              {taskItem}
              <button
                onClick={() => deleteTask(index)}
                style={{
                  marginLeft: "auto",
                  background: "transparent",
                  border: "none",
                  color: "#e53e3e",
                  fontSize: "1.2rem",
                  cursor: "pointer",
                }}
              >
                ×
              </button>
            </li>
          ))
        )}
      </div>
    </div>
  );
};

export default AddTask;
