import { ReactElement } from 'react'

export interface TaskProps {
	task: TaskObject;
	onArchiveTask(id: string): any;
	onPinTask(id: string): any;
}

export interface TaskObject {
	id: string;
	title: string;
	state: string;
}

export default function Task({ task: { id, title, state }, onArchiveTask, onPinTask }: TaskProps): ReactElement {

	return (
		<div className={`list-item ${state}`}>
			<label className="checkbox">
				<input
					type="checkbox"
					defaultChecked={state === "TASK_ARCHIVED"}
					disabled={true}
					name="checked"
				/>
				<span className="checkbox-custom" onClick={() => onArchiveTask(id)} />
			</label>
			<div className="title">
				<input type="text" value={title} readOnly={true} placeholder="Input title" />
			</div>
			<div className="actions" onClick={event => event.stopPropagation()}>
				{state !== 'TASK_ARCHIVED' && (
					// eslint-disable-next-line jsx-a11y/anchor-is-valid
					<a onClick={() => onPinTask(id)}>
						<span className={`icon-star`} />
					</a>
				)}
			</div>
		</div>
	)
}

