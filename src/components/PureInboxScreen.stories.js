import React from 'react';
import { Provider } from 'react-redux';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { fireEvent, within } from '@storybook/testing-library';
import { PureInboxScreen } from './InboxScreen';
import * as TaskListStories from './TaskList.stories';


// 간단한 모방된 버전의 redux store 생성
const Mockstore = configureStore({
  reducer: {
    tasks: createSlice({
      name: 'tasks',
      initialState: TaskListStories.Default.args.tasks,
      reducers: {
        updateTaskState: (state, action) => {
          const { id, newTaskState } = action.payload;
          const task = state.findIndex((task) => task.id === id);
          if (task >= 0) {
            state[task].state = newTaskState;
          }
        },
      },
    }).reducer,
  },
});

export default {
  component: PureInboxScreen,
  decorators: [story => <Provider store={Mockstore}>{story()}</Provider>],
  title: 'PureInboxScreen',
};

const Template = args => <PureInboxScreen {...args} />;

export const Default = Template.bind({});

export const Error = Template.bind({});
Error.args = {
  error: 'Something',
};

// 자동적으로 UI 의 변화를 보여주는 스토리
// 비동기적으로 처리한다.
export const WithInteractions = Template.bind({});
WithInteractions.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  // 첫 번째 Task 에 중요 표시를 한다(pinned)
  await fireEvent.click(canvas.getByLabelText("pinTask-1"));
  // 세 번째 Task 에 중요 표시를 한다(pinned)
  await fireEvent.click(canvas.getByLabelText("pinTask-3"));
};
