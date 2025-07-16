import React, { createContext, useState, useEffect } from "react";

// Create Context
export const TaskContext = createContext({});

// Create Provider component
export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, { id: Date.now(), name: task, isCompleted: false }]);
  };

  const toggleComplete = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const filterTasks = (filter) => {
    if (filter === "completed") {
      return tasks.filter((task) => task.isCompleted);
    }
    if (filter === "incomplete") {
      return tasks.filter((task) => !task.isCompleted);
    }
    return tasks;
  };

  return (
    <TaskContext.Provider
      value={{ tasks, addTask, toggleComplete, deleteTask, filterTasks }}
    >
      {children}
    </TaskContext.Provider>
  );
};
