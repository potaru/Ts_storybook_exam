import TaskContainer, { TaskContainerProps } from './TaskContainer';
import { Story } from '@storybook/react';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../modules';

const store = createStore(rootReducer);

export default {
    component: TaskContainer,
    decorators: [(story: any) => <Provider store={store}>{story()}</Provider>],
    title: 'TaskContainer',
};

const Template: Story<TaskContainerProps> = (args) => <TaskContainer {...args} />;

export const Default = Template.bind({});

export const Error = Template.bind({});
Error.args = {
  error: 'Something',
};