import "./App.css";
import "@mantine/core/styles.css";
import { createTheme, MantineProvider } from "@mantine/core";
import AppRouter from "./AppRouter";

const theme = createTheme({
  fontFamily: "Fira Code",
  headings: {
    fontFamily: "Open Sans",
  },
});

function App() {
  return (
    <MantineProvider theme={theme}>
      <AppRouter />
    </MantineProvider>
  );
}

export default App;
