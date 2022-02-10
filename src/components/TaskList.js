import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task';

export default function TaskList({ loading, tasks, onPinTask, onArchiveTask }) {
  // Task 애 중요 표시(pinned) 를 하거나, 완료 표시(archive) 를 하는 event
  const events = {
    onPinTask,
    onArchiveTask,
  };

  // Loading 상태에서 task 들이 로딩 되고 있을 보여주기 위한 Html 구조
  const LoadingRow = (
    <div className="loading-item">
      <span className="glow-checkbox" />
      <span className="glow-text">
        <span>Loading</span> <span>cool</span> <span>state</span>
      </span>
    </div>
  );

  // Loading 상태에서 보여지는 화면
  if (loading) {
    // 위에서 만든 LoadingRow 를 여러개 배치
    return (
      <div className="list-items">
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
      </div>
    );
  }

  // Empty 상태에서 보여지는 화면
  if (tasks.length === 0) {
    return (
      <div className="list-items">
        <div className="wrapper-message">
          <span className="icon-check" />
          <div className="title-message">You have no tasks</div>
          <div className="subtitle-message">Sit back and relax</div>
        </div>
      </div>
    );
  }

  // Pinned 된 Task 가 존재하면 TASK_PINNED 상태의 Task 를 먼저 배치하도록 한 배열
  // Spread Operator 를 활용
  const tasksInOrder = [
    ...tasks.filter(t => t.state === 'TASK_PINNED'),
    ...tasks.filter(t => t.state !== 'TASK_PINNED'),
  ];

  return (
    <div className="list-items">
      {/* map 을 활용하여 Task 들을 출력 */}
      {tasksInOrder.map(task => (
        <Task key={task.id} task={task} {...events} />
      ))}
    </div>
  );
}


TaskList.propTypes = {
  // Loading 상태는 불린 타입
  loading: PropTypes.bool,
  // Task 들은 Task.js 의 배열 형태로 받으며 필수로 필요하다.
  tasks: PropTypes.arrayOf(Task.propTypes.task).isRequired,
  // Pinned 상태로 바꿔주는 함수(아벤트)
  onPinTask: PropTypes.func,
  // Archive 상태로 바꿔주는 함수(아벤트)
  onArchiveTask: PropTypes.func,
};

// loading 의 기본 상태는 False 이다.
TaskList.defaultProps = {
  loading: false,
};