import React from "react";
import type { Task } from "../models/Task";



type Props = {
  title: string;
  tasks: Task[];
  onTaskUpdate: (taskId: number) => void;
  onDelete: (taskId: number) => void;
  nextActionLabel: string;
};



export default function TaskColumn({
    title,
    tasks,
    onTaskUpdate,
    onDelete,
    nextActionLabel,
  }: Props) {
    return (
      <div className="flex-1 flex-col bg-white rounded-lg shadow dark:bg-gray-800 p-4">
        
        
        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white text-center">
          {title}
        </h2>


        <div className="space-y-4 ">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="flex justify-between items-center p-2 bg-gray-100 rounded-lg dark:bg-gray-700"
              >
              <span className="text-sm text-gray-900 dark:text-white">{task.name}</span>
              <div className="flex space-x-2">
                <button
                  onClick={() => onTaskUpdate(task.id)}
                  className="text-sm px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  {nextActionLabel}
                </button>
                <button
                  onClick={() => onDelete(task.id)}
                  className="text-sm px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  