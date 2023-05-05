import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Header from "./Navigation/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
    </>
  );
}

export default App;
