import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import { TodoForm } from "./TodoForm";
import { saveTodo } from "../service";
import { Button, Card, CardBody, CardFooter, CardHeader, Divider, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Modal, ModalBody, ModalContent, ModalHeader, useDisclosure } from "@nextui-org/react"

export const TodoListItem = ({ todo }) => {

  const { todos, setTodos } = useContext( TodoContext );

  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  const onToggleDone = () => {

    todo.done = !todo.done;

    // local storage
    saveTodo(todo);

    // react state
    setTodos([
      ...todos.filter(todoItem => todoItem.id != todo.id),
      todo
    ]);
  }

  return (
    <>
      <Card>
        <CardHeader className="flex justify-between">
          <div className="flex flex-col">
            <p className="text-md">{todo.id}</p>
          </div>
          <Dropdown className="dark text-foreground bg-background">
            <DropdownTrigger>
              <Button
                isIconOnly color="default" aria-label="Like"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>

              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
              <DropdownItem key="edit" onPress={onOpen}>Edit</DropdownItem>
              <DropdownItem key="delete" className="text-danger" color="danger">
                Delete
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </CardHeader>

        <Divider />

        <CardBody>
          <p>{ todo.date }</p>
          <p className={`${todo.done ? "line-through" : ""}`}>{todo.desc}</p>
        </CardBody>

        <Divider />

        <CardFooter className="flex justify-end">
          <Button color={`${todo.done ? "default": "success"}`} onPress={onToggleDone}>
            {`${todo.done ? "Undo": "Done"}`}
          </Button>
        </CardFooter>
      </Card>

      <Modal
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        placement="top-center"
      >
        <ModalContent className="dark text-foreground bg-background">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Edit TODO</ModalHeader>
              <ModalBody>
                <TodoForm 
                  onSave={onClose} 
                  initialValues={ todo }
                />
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}
