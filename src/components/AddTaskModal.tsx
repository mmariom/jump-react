import React, { useState } from "react";

type Props = {
  addTask: (taskName: string) => void;
  setIsModalOpen: (isOpen: boolean) => void;
};

export default function AddTaskModal({ addTask, setIsModalOpen }: Props) {
  const [taskName, setTaskName] = useState("");
  const [error, setError] = useState("");


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!taskName.trim()) {
      setError("Task name is required.");
      return;
    }
    addTask(taskName.trim());
    setTaskName("");
    setError("");

  };
  return (
    <div
      id="crud-modal"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
    >
      <div className="relative p-4 w-full max-w-md">
        <div className="bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="flex items-center justify-between p-4 border-b rounded-t dark:border-gray-600">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Add New Task
            </h3>
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              ✖
            </button>
          </div>
          <form className="p-4" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="taskName"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Task Name
              </label>
              <input
                type="text"
                id="taskName"
                className={`block w-full p-2.5 border ${
                  error
                    ? "border-red-500"
                    : "border-gray-300 dark:border-gray-500"
                } rounded-lg bg-gray-50 dark:bg-gray-600 dark:placeholder-gray-400 dark:text-white`}
                value={taskName}
                onChange={(e) => {
                  setTaskName(e.target.value);
                  setError("");
                }}
              />
              {error && (
                <p className="text-red-500 text-sm mt-2">{error}</p>
              )}
            </div>
            <button
              type="submit"
              className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add Task
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}