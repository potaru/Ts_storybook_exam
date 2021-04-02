const ARCHIVE = 'task/ARCHIVE' as const;
const PIN = 'task/PIN' as const;

export const archiveTask = (id: string) => ({ type: ARCHIVE, id });
export const pinTask = (id: string) => ({ type: PIN, id });

type TaskAction =
  | ReturnType<typeof archiveTask>
  | ReturnType<typeof pinTask>;

type Task = {
  id: string;
  title: string;
  state: string;
};

export type TaskState = {
  tasks: Task[]
};


const initialState: Task[] = [
    { id: '1', title: 'Test Task', state: 'Task_INBOX'},
    { id: '2', title: 'Test Task', state: 'Task_INBOX'},
    { id: '3', title: 'Test Task', state: 'Task_INBOX'},
    { id: '4', title: 'Test Task', state: 'Task_INBOX'},
    { id: '5', title: 'Test Task', state: 'TASK_PINNED'},
    { id: '6', title: 'Test Task', state: 'Task_ARCHIVED'}
];

function taskStateReducer(taskState: string) {
  return (state: TaskState, action: TaskAction) => {
    return {
      ...state,
      tasks:state.tasks.map(task =>
        task.id === action.id ? { ...task, state: taskState } : task
      ),
    };
  };
}

function task(state: TaskState = {tasks: initialState}, action: TaskAction){
  switch (action.type) {
    case ARCHIVE:
      return taskStateReducer('TASK_ARCHIVED')(state, action);
    case PIN:
      return taskStateReducer('TASK_PINNED')(state, action);
    default:
      return state;
  }
};


export default task;