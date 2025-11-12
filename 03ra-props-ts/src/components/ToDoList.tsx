import { Task, type ToDoListTask } from "./Task.js"

type ToDoListProps = {
  tasks: ToDoListTask[];
}

export function ToDoList({ tasks }: ToDoListProps) {
  return (
    <ul>
      {tasks.map(task => 
        <Task {...task} key={task.id}/>
      )}
    </ul>
  )
}