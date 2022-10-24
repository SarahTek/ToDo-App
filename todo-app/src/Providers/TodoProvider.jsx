
import { createContext, useContext, useState } from "react";

const TodoContext = createContext();

const initialTodoListState = ["learn react"];

const TodoProvider = ({ Children }) => {
  const [todoList, setTodoList] = useState(initialTodoListState);

  const contextValue = {
    todoList,
    setTodoList
  }
  return (
    <TodoContext.Provider value={contextValue}>{Children}</TodoContext.Provider>
  )
}
export const useTodoContext = () => useContext(TodoContext);

export default TodoProvider;
