import React from 'react';
import { PureTaskList } from './TaskList';
import * as TaskStories from './Task.stories';

export default {
  component: PureTaskList,
  title: 'PureTaskList',
  decorators: [story => <div style={{ padding: '3rem' }}>{story()}</div>], // 스토리에 추가적인 markup 을 하기 위함
};

const Template = args => <PureTaskList {...args} />;

export const Default = Template.bind({});
Default.args = {
  // 스토리에 보여줄 더미 데이터 구성
  // Task 데이터는 task.stories.js 에서 제공하는 Default args의 task 를 가져와 쓴다.
  tasks: [
    { ...TaskStories.Default.args.task, id: '1', title: 'Task 1' },
    { ...TaskStories.Default.args.task, id: '2', title: 'Task 2' },
    { ...TaskStories.Default.args.task, id: '3', title: 'Task 3' },
    { ...TaskStories.Default.args.task, id: '4', title: 'Task 4' },
    { ...TaskStories.Default.args.task, id: '5', title: 'Task 5' },
    { ...TaskStories.Default.args.task, id: '6', title: 'Task 6' },
  ],
};

export const WithPinnedTasks = Template.bind({});
WithPinnedTasks.args = {
  // 스토리에 보여줄 더미 데이터 구성
  // Default 상태에서 데이터를 5개 가져오고 이후 하나만 PINNED 상태로 추가한다.
  tasks: [
    ...Default.args.tasks.slice(0, 5),
    { id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED' },
  ],
};

export const Loading = Template.bind({});
Loading.args = {
  tasks: [],
  loading: true,
};

export const Empty = Template.bind({});
Empty.args = {
  // 스토리에 보여줄 더미 데이터 구성
  // 우선 Loading 상태의 args 를 참고해서 쓴다.
  ...Loading.args,
  loading: false,
};