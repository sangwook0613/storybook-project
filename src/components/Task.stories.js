import React from 'react';

import Task from './Task';

export default {
  component: Task,
  title: 'Task',
};

// Task 컴포넌트에 args 인자를 갖는 Template 함수를 생성
const Template = args => <Task {...args} />;

// bind 메서드를 활용해서 Template 함수를 복사하여 사용
export const Default = Template.bind({});
Default.args = {
  task: {
    id: '1',
    title: 'Test Task',
    state: 'TASK_INBOX',
    updatedAt: new Date(2018, 0, 1, 9, 0),
  },
};

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_PINNED',
  },
};

export const Archived = Template.bind({});
Archived.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_ARCHIVED',
  },
};