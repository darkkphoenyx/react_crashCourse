import React, { useState, useContext } from "react";
import { TaskContext } from "../context/TaskV2";

const TaskV2 = () => {
  const [newTask, setNewTask] = useState("");
  const [filter, setFilter] = useState("all");
  const { tasks, addTask, toggleComplete, deleteTask, filterTasks } =
    useContext(TaskContext);

  const handleAddTask = () => {
    if (newTask.trim()) {
      addTask(newTask);
      setNewTask("");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-4">Task Manager</h1>

      {/* Add Task Section */}
      <div className="mb-4 flex justify-center">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="border border-gray-300 p-2 mr-2 rounded"
          placeholder="Add new task"
        />
        <button
          onClick={handleAddTask}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Task
        </button>
      </div>

      {/* Filter Section */}
      <div className="mb-4 flex justify-center space-x-4">
        <button
          onClick={() => setFilter("all")}
          className={`px-4 py-2 rounded ${
            filter === "all" ? "bg-gray-700 text-white" : "bg-gray-200"
          }`}
        >
          All Tasks
        </button>
        <button
          onClick={() => setFilter("completed")}
          className={`px-4 py-2 rounded ${
            filter === "completed" ? "bg-green-700 text-white" : "bg-gray-200"
          }`}
        >
          Completed
        </button>
        <button
          onClick={() => setFilter("incomplete")}
          className={`px-4 py-2 rounded ${
            filter === "incomplete" ? "bg-red-700 text-white" : "bg-gray-200"
          }`}
        >
          Incomplete
        </button>
      </div>

      {/* Task List */}
      <div>
        {filterTasks(filter).map((task) => (
          <div
            key={task.id}
            className="flex justify-between items-center mb-2 p-2 border rounded shadow-md"
          >
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={task.isCompleted}
                onChange={() => toggleComplete(task.id)}
                className="mr-2"
              />
              <span
                className={task.isCompleted ? "line-through text-gray-500" : ""}
              >
                {task.name}
              </span>
            </div>
            <button
              onClick={() => deleteTask(task.id)}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskV2;
