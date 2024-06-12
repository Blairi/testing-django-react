import { NextUIProvider } from "@nextui-org/react";
import { Home } from "./components/Home";
import { TodoProvider } from "./context/TodoProvider";

function App() {
  return (
    <NextUIProvider>
      <TodoProvider>
        <Home />
      </TodoProvider>
    </NextUIProvider>
  );
}

export default App
