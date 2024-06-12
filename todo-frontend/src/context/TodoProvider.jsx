import { useState, useEffect } from "react"
import { TodoContext } from "./TodoContext"
import { getTodos } from "../service";

export const TodoProvider = ({ children }) => {

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setTodos( getTodos() );
  }, []);

  return(
    <TodoContext.Provider value={{ todos, setTodos }}>
      { children }
    </TodoContext.Provider>
  )
}
