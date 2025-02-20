import { useState } from 'react';
import { nanoid } from 'nanoid';
import { Task } from './task'; 

export const useTaskManager = () => {
 const [tasks, setTasks] = useState<Task[]>([]);
 const [searchKeyword, setSearchKeyword] = useState<string>("");

 const addTask = (title: string) => {
    if (title.length < 1) {
      return;
    }

    const newTask: Task = {
      id: nanoid(),
      title,
    };
    setTasks((prev) => [...prev, newTask]);
 };

 const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
 };

 const updateTask = (id: string, taskUpdate: Partial<Task>) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, ...taskUpdate } : task)));
 };

 const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchKeyword.toLowerCase()),
 );

 return {
    tasks: filteredTasks,
    addTask,
    deleteTask,
    updateTask,
    searchKeyword,
    setSearchKeyword,
 };
};
