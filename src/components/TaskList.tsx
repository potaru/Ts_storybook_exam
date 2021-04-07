import { ReactElement } from 'react'
import { TaskType } from '../modules/task';

import Task from './Task';

export type TaskListProps = {
  tasks: TaskType[];
  loading?: boolean;
  onArchiveTask: (id: string) => void;
  onPinTask: (id: string) => void;
}

export function TaskList({ tasks, loading, onArchiveTask, onPinTask }: TaskListProps): ReactElement {
  const events = {
    onArchiveTask,
    onPinTask
  }
  const LoadingRow = (
    <div className="loading-item">
      <span className="glow-checkbox" />
      <span className="glow-text">
        <span>Loading</span> <span>cool</span> <span>state</span>
      </span>
    </div>
  );

  if (loading) {
    return (
      <div className="list-items">
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
      </div>
    );
  }
  else if (tasks.length === 0) {
    return (
      <div className="list-items">
        <div className="wrapper-message">
          <span className="icon-check" />
          <div className="title-message">You have no tasks</div>
          <div className="subtitle-message">Sit back and relax</div>
        </div>
      </div>
    );
  }
  const filtered_task: TaskType[] = [
    ...tasks.filter((task: TaskType) => task.state === 'TASK_PINNED'),
    ...tasks.filter((task: TaskType) => task.state !== 'TASK_PINNED')
  ]
  return (
    <div className="list-items">
      {filtered_task.map(task =>
        <Task key={task.id} task={task} {...events} />
      )}
    </div>
  )
}

