import { ScrollShadow } from "@nextui-org/react"
import { TodoForm, TodoList } from "./"

export const Home = () => {
  return (
    <div className="md:grid md:place-items-center min-h-screen min-w-screen dark text-foreground bg-background">
      <div className="app-container grid gap-2 md:grid-cols-[1fr_2fr]">

        <div className="bg-gray-900 p-3 rounded-md space-y-5 h-max">

          <h2 className="text-lg text-gray-100">New TODO</h2>

          <TodoForm />  

        </div>

        <div className="bg-gray-900 p-3 rounded-md space-y-5">

          <h1 className="text-xl font-bold">TODO list</h1>

          <ScrollShadow hideScrollBar className="max-h-[60vh]">
            <TodoList />
          </ScrollShadow>

        </div>

      </div>
    </div>
  )
}
