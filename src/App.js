import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {

  return (
    <div className="p-5">
      <h2 style={{textAlign:"center", color:"red",marginBottom:"40px"}}><u>ToDo App</u></h2>
      <TodoInput/>
      <TodoList/>
    </div>
  );
}

export default App;