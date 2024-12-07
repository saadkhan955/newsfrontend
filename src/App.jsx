import { useState } from "react";
import Header from "./components/header/Header";
import NavBar from "./components/nav/NavBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <NavBar />
    </>
  );
}

export default App;
