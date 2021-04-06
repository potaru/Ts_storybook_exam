import { createReducer } from 'typesafe-actions';
import { ARCHIVED, PINNED } from './actions';

import { Task, TaskAction, TaskState } from "./types";

export const archiveTask = (id: string) => ({ type: ARCHIVED, id });
export const pinTask = (id: string) => ({ type: PINNED, id });

const initialState: Task[] = [
	{ id: '1', title: 'Test Task1', state: 'Task_INBOX' },
	{ id: '2', title: 'Test Task2', state: 'Task_INBOX' },
	{ id: '3', title: 'Test Task3', state: 'Task_INBOX' },
	{ id: '4', title: 'Test Task4', state: 'Task_INBOX' },
	{ id: '5', title: 'Test Task5', state: 'TASK_PINNED' },
	{ id: '6', title: 'Test Task6', state: 'Task_ARCHIVED' }
];

function taskStateReducer(taskState: 'TASK_ARCHIVED' | 'TASK_PINNED') {
	return (state: TaskState, action: TaskAction) => {
		return {
			...state,
			tasks: state.tasks.map(task =>
				task.id === action.id ? { ...task, state: taskState } : task
			),
		};
	};
}

// typesafe-actions 없이 작성
// function task(state: TaskState = {tasks: initialState}, action: TaskAction){
//   switch (action.type) {
//     case ARCHIVED:
//       return taskStateReducer('TASK_ARCHIVED')(state, action);
//     case PINNED:
//       return taskStateReducer('TASK_PINNED')(state, action);
//     default:
//       return state;
//   }
// };

// use typessafe-actions createReducer
const task = createReducer<TaskState, TaskAction>({ tasks: initialState }, {
	[ARCHIVED]: (state: TaskState, action: TaskAction) => (taskStateReducer('TASK_ARCHIVED')(state, action)),
	[PINNED]: (state: TaskState, action: TaskAction) => (taskStateReducer('TASK_PINNED')(state, action)),
});

export default task;