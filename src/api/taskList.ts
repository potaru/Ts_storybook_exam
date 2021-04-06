// import axios from 'axios';

export async function getTaskList() {
	const response =
	{
		data: [
			{ id: '1', title: 'API Task1', state: 'Task_INBOX' },
      { id: '2', title: 'API Task2', state: 'Task_INBOX' },
			{ id: '3', title: 'API Task3', state: 'Task_INBOX' },
			{ id: '4', title: 'API Task4', state: 'Task_INBOX' },
			{ id: '5', title: 'API Task5', state: 'TASK_PINNED' },
			{ id: '6', title: 'API Task6', state: 'Task_ARCHIVED' }
		]
	};

	return response.data;
}