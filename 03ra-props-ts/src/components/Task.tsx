export type ToDoListTask = {
  id: string;
  title: string;
  done?: boolean;
}

type TaskProps = ToDoListTask & {
  onStatusToggle?: () => void;
  onRemove?: () => void;
}

export function Task({ title, done, onStatusToggle, onRemove }: TaskProps) {
  const status = done ? '✅' : '🕓';

  return (
    <div>
      <button onClick={onStatusToggle}>{status}</button>
      <span>{title}</span>
      <button onClick={onRemove}>❌</button>
    </div>
  )
}

