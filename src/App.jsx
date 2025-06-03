import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {

  let todos = [
    "Gym",
    "Groceries",
    "Clean room"
  ];

  return (
    <main>
      <TodoInput />
      <TodoList todos={todos}/>
    </main>
  )
}

export default App
