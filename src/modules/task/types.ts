import { archiveTask, pinTask }from './reducer';

export type TaskAction = 
  | ReturnType<typeof archiveTask>
  | ReturnType<typeof pinTask>

export type TaskType = {
  id: string;
  title: string;
  state: string;
};
    
export type TaskState = {
  tasks: TaskType[]
};