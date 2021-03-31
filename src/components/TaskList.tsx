import React, { ReactElement } from 'react'

import Task, { TaskProps, TaskObject } from './Task';

export interface TaskListProps {
    loading: boolean;
    tasks: TaskObject[];
    onArchiveTask(id:string): any;
    onPinTask(id:string): any;
}



export default function TaskList({ loading, tasks, onArchiveTask, onPinTask}: TaskListProps): ReactElement {
    const events = {
        onArchiveTask,
        onPinTask
    };
    if (loading) {
        return <div className="list-items">loading</div>;
    }
    if (tasks.length === 0) {
        return <div className="list-items">empty</div>;
    }

    return (
        <div className="list-items">
            {/* <Task key={tasks[0].id} task={tasks[0]} {...events} /> */}
            {tasks.map(task => 
                <Task key={task.id} task={task} {...events} />
            )}
        </div>
    )
}
