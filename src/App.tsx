import React, { useState } from "react";
import TaskColumn from "./components/TaskColumn";
import AddTaskModal from "./components/AddTaskModal";
import { Task } from "./models/Task";


export default function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addTask = (taskName: string) => {
    if (!taskName) return;
    setTasks([...tasks, { id: Date.now(), name: taskName, status: "To do" }]);
    setIsModalOpen(false);
  };

  const updateTaskStatus = (taskId: number, newStatus: Task["status"]) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  };

  const deleteTask = (taskId: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="app bg-gray-50 dark:bg-gray-900 h-screen p-4">
      <h1 className="text-8xl font-bold text-center text-gray-900 dark:text-white mb-6">
        Kanban Board
      </h1>
      <div className="flex justify-center mb-6">
        <button
          onClick={() => setIsModalOpen(true)}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add Task
        </button>
      </div>

      <div className="flex space-x-4 justify-center">
      <TaskColumn
          title="To Do"
          tasks={tasks.filter((task) => task.status === "To do")}
          onTaskUpdate={(taskId) => updateTaskStatus(taskId, "In progress")}
          onDelete={deleteTask}
          nextActionLabel="Start"
        />
        <TaskColumn
          title="In Progress"
          tasks={tasks.filter((task) => task.status === "In progress")}
          onTaskUpdate={(taskId) => updateTaskStatus(taskId, "Done")}
          onDelete={deleteTask}
          nextActionLabel="Complete"
        />
        <TaskColumn
          title="Done"
          tasks={tasks.filter((task) => task.status === "Done")}
          onTaskUpdate={(taskId) => updateTaskStatus(taskId, "To do")}
          onDelete={deleteTask}
          nextActionLabel="Restart"
        />
      </div>

      {isModalOpen && <AddTaskModal addTask={addTask} setIsModalOpen={setIsModalOpen} />}
    </div>
  );
}
