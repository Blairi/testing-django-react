import { useContext } from "react"
import { TodoListItem } from "./TodoListItem"
import { TodoContext } from "../context/TodoContext";

export const TodoList = () => {

  const { todos = [] } = useContext( TodoContext );

  return (
    <ul className="grid gap-3 md:grid-cols-3">
      {
        todos.map((item, i) => (
          <TodoListItem 
            key={i}
            date={item.date}
            desc={item.desc}
            done={item.done}
          />
        ))
      }
    </ul>
  )
}
