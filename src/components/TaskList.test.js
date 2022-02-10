import React from 'react';
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom/extend-expect';

import { WithPinnedTasks } from './TaskList.stories'; //👈  테스트 해볼 Pinned 상태의 스토리를 불러온다.

it('renders pinned tasks at the start of the list', () => {
  const div = document.createElement('div');
  //👇 우리가 테스트할 Pinned Task들의 args 를 사용한다.
  ReactDOM.render(<WithPinnedTasks {...WithPinnedTasks.args} />, div);

  // 맨 마지막 task 인 6번 task 가 마지막이 아닌 맨위에 오기를 희망한다.
  const lastTaskInput = div.querySelector('.list-item:nth-child(1) input[value="Task 6 (pinned)"]');
  expect(lastTaskInput).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});