import { NextUIProvider } from "@nextui-org/react";
import { Home } from "./components/Home";

function App() {
  return (
    <NextUIProvider>
      <Home />
    </NextUIProvider>
  );
}

export default App
