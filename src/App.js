import "./App.css";
import TodoList from "./components/TodoList";
import Popup from "./components/Popup";

export default function App() {
  return (
    <>
      <Popup />
      <div className="todo-app">
        <TodoList />
      </div>
    </>
  );
}
