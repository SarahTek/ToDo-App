import { useState } from "react";
import { useTodoContext } from "../Providers/TodoProvider"

const TodoForm = () => {

  const { todoList } = useTodoContext();
  const [todoItem, setTodoItem] = useState("")
  return (
    <form>
      <h3>Number of todo Items: {todoList.length}</h3>
      <input tyoe="text" />
      <button type="submit">Submit</button>
    </form>
  )
}
export default TodoForm;
