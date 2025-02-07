import "./App.css";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import AppRouter from "./AppRouter";
function App() {
  return (
    <MantineProvider>
      <AppRouter />
    </MantineProvider>
  );
}

export default App;
