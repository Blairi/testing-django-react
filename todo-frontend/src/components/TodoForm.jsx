import { Button, DatePicker, Input } from "@nextui-org/react"

export const TodoForm = () => {
  return (
    <form className="space-y-3">
      <Input type="text" isRequired label="Description" placeholder="Enter TODO's description" />
      <DatePicker label="Date" />
      <div className="flex justify-end">
        <Button color="primary">
          Save
        </Button>
      </div>
    </form>
  )
}
