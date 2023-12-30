import logo from "./logo.svg";
import "./App.css";

import Menu from "./components/Menu";
import { IconName } from "react-icons/fa";
import Container from "./components/Container";

function App() {
  return (
    <div className='App'>
      <Menu />
      <Container />
    </div>
  );
}

export default App;
