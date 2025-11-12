import { useState } from "react";
import { Task, type ToDoListTask } from "./Task.js"

type ToDoListProps = {
  tasks: ToDoListTask[];
}

export function DynamicToDoList(props: ToDoListProps) {
  const [tasks, setTasks] = useState(props.tasks);

  const removeTask = (id: string) => {
    console.log(id);

    setTasks(data => data.filter(task => task.id !== id))
  }

  const toggleStatus = (id: string) => {
    console.log(id);

    setTasks(data => data.map(task => {
      if (task.id === id) {
        return {...task, done: !task.done }
      }

      return task
    }))
  }

  return (
    <ul>
      {tasks.map(task => 
        <Task 
        {...task} 
        key={task.id} 
        onStatusToggle={() => toggleStatus(task.id)}
        onRemove={() => removeTask(task.id)}
        />
      )}
    </ul>
  )
}