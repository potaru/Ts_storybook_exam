import { archiveTask, pinTask }from './reducer';

export type TaskAction = 
  | ReturnType<typeof archiveTask>
  | ReturnType<typeof pinTask>

export type Task = {
  id: string;
  title: string;
  state: string;
};

export type TaskState = {
  tasks: Task[]
};