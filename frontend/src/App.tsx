import "./App.css";
import { useState } from "react";
import { useRef } from "react";

type note = {
  id: string;
  title: string;
  text: string;
  timestamp: number;
};

let notes: note[] = [];
let editingID: string | null = null;

function App() {
  function save() {}

  function change() {}

  return (
    <main>
      <h2>web-memo</h2>
      <button type="button" onClick={save}>
        SAVE
      </button>
    </main>
  );
}

export default App;
