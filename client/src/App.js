import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import SendMessage from "./components/SendMessage.js";
import Nav from "./components/Nav.js";
import Menu from "./components/Menu.js";
import "./index.css";
import { useWindowSize } from "react-hooks-window-size";
const socket = io.connect("http://localhost:3001");

function App() {
  let [isOpen, setOpen] = useState(false);
  let [windowSize, setWindowSize] = useState(useWindowSize());
  let [currTeam, setTeam] = useState("General");
  useEffect(() => {
    console.log(windowSize.height);
  }, []);

  return (
    <div>
      {isOpen ? (
        <Menu setOpen={setOpen} isOpen={isOpen} setTeam={setTeam} />
      ) : (
        <div></div>
      )}
      <Nav setOpen={setOpen} isOpen={isOpen} currTeam={currTeam} />
      <SendMessage
        socket={socket}
        isOpen={isOpen}
        height={windowSize.height}
        currTeam={currTeam}
      />
    </div>
  );
}

export default App;
