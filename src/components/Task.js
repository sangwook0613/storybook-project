import React from 'react';
import PropTypes from 'prop-types';

export default function Task({ task: { id, title, state }, onArchiveTask, onPinTask }) {
  return (
    <div className={`list-item ${state}`}>
      {/* 완료여부 체크박스 */}
      <label className="checkbox">
        <input
          type="checkbox"
          defaultChecked={state === 'TASK_ARCHIVED'}
          disabled={true}
          name="checked"
        />
        <span className="checkbox-custom" onClick={() => onArchiveTask(id)} id={`archiveTask-${id}`} aria-label={`archiveTask-${id}`} />
      </label>

      {/* Task 내용 들어갈 input */}
      <div className="title">
        <input type="text" value={title} readOnly={true} placeholder="Input title" style={{ textOverflow: "ellipsis" }}/>
      </div>

      {/* 중요한 Task 체크하는 파트 */}
      <div className="actions" onClick={event => event.stopPropagation()}>
        {state !== 'TASK_ARCHIVED' && (
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          <a onClick={() => onPinTask(id)}>
            <span 
              className={`icon-star`} 
              id={`pinTask-${id}`}
              aria-label={`pinTask-${id}`}
            />
          </a>
        )}
      </div>
    </div>
  );
}

Task.propTypes = {
  // Task 의 구성
  task: PropTypes.shape({
    // id = 문자열, 필수
    id: PropTypes.string.isRequired,
    // title = 문자열, 필수
    title: PropTypes.string.isRequired,
    // state = 문자열, 필수
    state: PropTypes.string.isRequired,
  }),
  // Task 가 완료되었음을 알리는 이벤트 함수
  onArchiveTask: PropTypes.func,
  // Task 가 중요표시(pinned) 되었음을 알리는 이벤트 함수
  onPinTask: PropTypes.func,
};