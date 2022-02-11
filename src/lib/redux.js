// redux toolkit 을 활용하여 간단한 redux 설정하기
import { configureStore, createSlice } from "@reduxjs/toolkit";

/*
 * The initial state of our store when the app loads.
 * Usually, you would fetch this from a server.
 */
const defaultTasks = [
  { id: "1", title: "Something", state: "TASK_INBOX" },
  { id: "2", title: "Something more", state: "TASK_INBOX" },
  { id: "3", title: "Something else", state: "TASK_INBOX" },
  { id: "4", title: "Something again", state: "TASK_INBOX" },
];

// createSlice 를 사용하여 간단하게 reducer와 action 를 한번에 생성
const TasksSlice = createSlice({
  name: "tasks",
  initialState: defaultTasks,
  reducers: {
    updateTaskState: (state, action) => {
      const { id, newTaskState } = action.payload;
      const task = state.findIndex((task) => task.id === id);
      if (task >= 0) {
        state[task].state = newTaskState;
      }
    },
  },
});

// 컴포넌트에서 action 을 사용하기 위해 export
export const { updateTaskState } = TasksSlice.actions;

// configureStore 를 사용해서 store 를 생성
const store = configureStore({
  reducer: {
    tasks: TasksSlice.reducer,
  },
});

export default store;