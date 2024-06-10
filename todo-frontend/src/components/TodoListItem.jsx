import { Button, Card, CardBody, CardFooter, CardHeader, Divider, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react"

export const TodoListItem = () => {
  return (
    <Card>
      <CardHeader className="flex justify-between">
        <div className="flex flex-col">
          <p className="text-md">NextUI</p>
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
            <DropdownItem key="edit">Edit</DropdownItem>
            <DropdownItem key="delete" className="text-danger" color="danger">
              Delete
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </CardHeader>

      <Divider />

      <CardBody>
        <p>Make beautiful websites regardless of your design experience.</p>
      </CardBody>

      <Divider />

      <CardFooter className="flex justify-end">
        <Button color="success">
          Done
        </Button>
      </CardFooter>
    </Card>
  )
}
