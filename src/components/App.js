import React, { useMemo, useState } from "react";
import "./../styles/App.css";

const todos = [
  { id: 1, title: "Todo 1", completed: true },
  { id: 2, title: "Todo 2", completed: true },
  { id: 3, title: "Todo 3", completed: true },
  { id: 4, title: "Todo 4", completed: true },
  { id: 5, title: "Todo 5", completed: true },
  { id: 6, title: "Todo 6", completed: true },
  { id: 7, title: "Todo 7", completed: true },
  { id: 8, title: "Todo 8", completed: true },
  { id: 9, title: "Todo 9", completed: true },
  { id: 10, title: "Todo 10", completed: true },
  { id: 11, title: "Todo 11", completed: true },
  { id: 12, title: "Todo 12", completed: true },
  { id: 13, title: "Todo 13", completed: true },
  { id: 14, title: "Todo 14", completed: true },
  { id: 15, title: "Todo 15", completed: true },
  { id: 16, title: "Todo 16", completed: true },
  { id: 17, title: "Todo 17", completed: true },
  { id: 18, title: "Todo 18", completed: true },
  { id: 19, title: "Todo 19", completed: true },
  { id: 20, title: "Todo 20", completed: true },
  { id: 21, title: "Todo 21", completed: true },
  { id: 22, title: "Todo 22", completed: true },
  { id: 23, title: "Todo 23", completed: true },
  { id: 24, title: "Todo 24", completed: true },
  { id: 25, title: "Todo 25", completed: true },

  { id: 26, title: "Todo 26", completed: false },
  { id: 27, title: "Todo 27", completed: false },
  { id: 28, title: "Todo 28", completed: false },
  { id: 29, title: "Todo 29", completed: false },
  { id: 30, title: "Todo 30", completed: false },
  { id: 31, title: "Todo 31", completed: false },
  { id: 32, title: "Todo 32", completed: false },
  { id: 33, title: "Todo 33", completed: false },
  { id: 34, title: "Todo 34", completed: false },
  { id: 35, title: "Todo 35", completed: false },
  { id: 36, title: "Todo 36", completed: false },
  { id: 37, title: "Todo 37", completed: false },
  { id: 38, title: "Todo 38", completed: false },
  { id: 39, title: "Todo 39", completed: false },
  { id: 40, title: "Todo 40", completed: false },
  { id: 41, title: "Todo 41", completed: false },
  { id: 42, title: "Todo 42", completed: false },
  { id: 43, title: "Todo 43", completed: false },
  { id: 44, title: "Todo 44", completed: false },
  { id: 45, title: "Todo 45", completed: false },
  { id: 46, title: "Todo 46", completed: false },
  { id: 47, title: "Todo 47", completed: false },
  { id: 48, title: "Todo 48", completed: false },
  { id: 49, title: "Todo 49", completed: false },
  { id: 50, title: "Todo 50", completed: false },
];

const App = () => {
  const [filter, setFilter] = useState("all");
  const [mode, setMode] = useState(true);

  const filteredTodos = useMemo(() => {
    return todos.filter((todo) => {
      if (filter === "active") return todo.completed == false;
      if (filter === "completed") return todo.completed == true;
      return true;
    });
  }, [filter]);

  return (
    <div
      style={{
        backgroundColor: mode == true ? "white" : "black",
        color: mode == true ? "black" : "white",
      }}
    >
      {/* Do not remove the main div */}
      <button onClick={() => setFilter("all")}>All</button>
      <button onClick={() => setFilter("active")}>Active</button>
      <button onClick={() => setFilter("completed")}>Completed</button>
      <button onClick={() => setMode((prev) => !prev)}>
        {mode === true ? "light" : "dark"}
      </button>
      <hr />
      {filteredTodos.map((item, idx) => (
        <ul key={idx}>
          <li
            style={{
              textDecoration: item.completed == true ? "line-through" : "none",
            }}
          >
            {item.title}
          </li>
        </ul>
      ))}
    </div>
  );
};

export default App;
