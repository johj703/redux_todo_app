import { useSelector } from "react-redux";
import AddForm from "./components/AddForm";

function App() {
  const todos = useSelector((state) => state.todos);
  console.log("todos", todos);

  return (
    <div>
      <h1>Redux TODO App</h1>
      <AddForm />
    </div>
  );
}

export default App;
