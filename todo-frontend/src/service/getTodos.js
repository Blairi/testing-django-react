
export const getTodos = () => {
  let todoList = localStorage.getItem("todos");

  if (!todoList) {
    localStorage.setItem("todos", JSON.stringify([]));
    todoList = localStorage.getItem("todos");
  }
  todoList = JSON.parse(todoList);
  return todoList;

}
