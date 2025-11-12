import TimerCard from "./components/TimerCard/TimerCard";
import TaskCard from "./components/TaskCard/TaskCard";
import Header from "./components/Header/Header";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <TimerCard />
      <TaskCard />
    </div>
  );
}

export default App;
