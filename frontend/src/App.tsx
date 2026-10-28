import "./App.css";
import { useState } from "react";

function App() {
  type Note = {
    id: string;
    title: string;
    context: string;
    timestamp: string;
  };

  const [notes, setNotes] = useState<Note[]>([]);

  return (
    <main>
      <section className="editor">
        <h2>Editor</h2>
        <input type="text" placeholder="Title" />
        <textarea placeholder="note typing here..."></textarea>
        <button>Save</button>
      </section>

      <section className="list">
        <h2>List</h2>
        <button>New</button>
      </section>
    </main>
  );
}

export default App;
