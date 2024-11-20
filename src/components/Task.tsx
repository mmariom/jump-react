import React from "react";
import type { Task } from "../models/Task";


type Props = {
  task: Task;
  onTaskUpdate: (taskId: number) => void;
  onDelete: (taskId: number) => void;
  nextActionLabel: string;
};

export default function Task({ task, onTaskUpdate, onDelete, nextActionLabel }: Props) {
  return (
    <div className="flex justify-between items-center p-2 bg-gray-100 rounded-lg dark:bg-gray-700">
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
  );
}
