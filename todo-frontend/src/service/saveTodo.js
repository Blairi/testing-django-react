
export const saveTodo = ( todo ) => {

  let todoList = localStorage.getItem("todos");

  if (!todoList) {
    localStorage.setItem("todos", JSON.stringify([]));
    todoList = localStorage.getItem("todos");
  }

  todoList = JSON.parse( todoList );
  todoList.push(todo);

  localStorage.setItem("todos", JSON.stringify(todoList));
}