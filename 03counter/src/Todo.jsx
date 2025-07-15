import { useState } from "react";

const Todo = () => {
  const [todo, setTodo] = useState([]);
  const [inputOpen, setInputOpen] = useState(false);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    const trimmed = newTodo.trim();
    if (!trimmed) return;

    if (todo.includes(trimmed)) {
      alert("This todo already exists!");
      return;
    }

    setTodo((prev) => [...prev, trimmed]);
    setNewTodo("");
  };

  const deleteTodo = (index) => {
    setTodo((prev) => prev.filter((_, i) => i !== index));
  };

  const deleteAllTodo = () => {
    setTodo([]);
  };

  const handleInputOpen = () => {
    setInputOpen((prev) => !prev);
  };

  const newPromise = () => {
    return new Promise((resolve, reject) => {
      setTimeout((newVak) => {
        newVak % 2 == 0 ? resolve("helloworld") : reject("rejected");
      }, 1000);
    });
  };

  const newAsync = () => {
    return async () => {
      let data = await newPromise();
      data ?? "hellowrld";
    };
  };
  return (
    <>
      <button onClick={handleInputOpen} className="border p-2 rounded mt-5">
        {inputOpen ? "Close Input" : "New Todo"}
      </button>
      {inputOpen && (
        <div className="flex gap-4 mt-5">
          <input
            className="border px-2 py-1 rounded"
            type="text"
            value={newTodo}
            placeholder="Add new task"
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <button
            className="border p-2 rounded bg-green-500 text-white"
            onClick={addTodo}
          >
            Add
          </button>
          <button
            className="border p-2 rounded bg-red-500 text-white"
            onClick={deleteAllTodo}
          >
            Delete All
          </button>
        </div>
      )}
      <div className="mt-6">
        <p className="font-semibold">
          You have {todo.length} task{todo.length !== 1 ? "s" : ""}:
        </p>
        {todo.length > 0 ? (
          <ul className="mt-2 space-y-2">
            {todo.map((task, index) => (
              <li key={index} className="flex items-center gap-4">
                <span>{task}</span>
                <button
                  onClick={() => deleteTodo(index)}
                  className="text-red-500 border px-2 rounded"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 mt-2">No todos yet</p>
        )}
      </div>
    </>
  );
};

export default Todo;
