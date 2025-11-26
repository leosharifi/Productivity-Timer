import styles from "./AddTask.module.css";
import { useState, useEffect } from "react";
interface Task {
  name: string;
  id: number;
  completed: boolean;
}
const AddTask = () => {
  const [inputVal, setInputVal] = useState("");
  const [task, setTask] = useState<Task[]>([]);

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
    const newTask: Task = {
      id: Date.now(),
      name: inputVal,
      completed: false,
    };
    setTask([...task, newTask]);
    setInputVal("");
  };
  const deleteTask = (indextoDelete: number) => {
    setTask(task.filter((_, index) => index !== indextoDelete));
  };

  const toggleTaskCompletion = (id: number) => {
    setTask(
      task.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
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
            <li
              key={taskItem.id} // ← use id, not index!
              style={{
                backgroundColor: taskItem.completed ? "#ecfdf5" : "#ffffff",
                border: taskItem.completed
                  ? "2px solid #10b981"
                  : "2px solid #e5e7eb",
                textDecoration: taskItem.completed ? "line-through" : "none",
                opacity: taskItem.completed ? 0.8 : 1,
                transition: "all 0.3s ease",
              }}
            >
              <button
                style={{
                  padding: 10,
                  borderRadius: 15,
                  cursor: "pointer",
                  border: taskItem.completed
                    ? "2px solid blue"
                    : "2px solid black",
                  color: taskItem.completed ? "green" : "gray",
                  backgroundColor: taskItem.completed
                    ? "#1703edff"
                    : "transparent",
                  marginRight: 10,
                }}
                className={styles.checkButton}
                onClick={() => toggleTaskCompletion(taskItem.id)}
              />
              {taskItem.name}
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
