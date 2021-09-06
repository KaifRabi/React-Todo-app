import "./styles.css";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

export default function App() {
  return (
    <div className="todo-app">
      <TodoList />
    </div>
  );
}
