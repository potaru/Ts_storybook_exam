import { useDispatch, useSelector } from 'react-redux';
import { archiveTask, pinTask, TaskState } from '../modules/Task';
import { RootState } from '../modules';

import { TaskList } from './TaskList';

export interface TaskContainerProps {
    error?: string;
}

export default function TaskContainer(error: TaskContainerProps) {
    const tasks = useSelector((state: RootState) => state.task.tasks);
    const dispatch = useDispatch();
  
    const onArchiveTask = (id: string) => dispatch(archiveTask(id));
    const onPinTask = (id: string) => dispatch(pinTask(id));

    if (error.error) {
        return (
        <div className="page lists-show">
            <div className="wrapper-message">
                <span className="icon-face-sad" />
                <div className="title-message">
                    Oh no!
                </div>
                <div className="subtitle-message">
                    {error.error}
                </div>
            </div>
        </div>
        );
    }

    return (
        <div className="page lists-show">
            <nav>
                <h1 className="title-page">
                <span className="title-wrapper">Taskbox</span>
                </h1>
            </nav>
            <TaskList tasks={tasks} onArchiveTask={onArchiveTask} onPinTask={onPinTask} loading={false}/>
        </div>
    );
}
