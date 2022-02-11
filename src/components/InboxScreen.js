import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from "react-redux";
import { TaskList } from "./TaskList";

export function PureInboxScreen({ error }) {
  // 서버에서 데이터를 받아오는 에러가 발생한 경우
  if (error) {
    return (
      <div className="page lists-show">
        <div className="wrapper-message">
          <span className="icon-face-sad" />
          <div className="title-message">Oh no!</div>
          <div className="subtitle-message">Something went wrong</div>
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
      <TaskList />
    </div>
  );
}

PureInboxScreen.propTypes = {
  // 에러메세지는 string 타입이다.
  error: PropTypes.string,
};

PureInboxScreen.defaultProps = {
  error: null,
};

export function InboxScreen() {
  // useSelector 를 활용하여 store 에 저장되어 있는 isError 값을 error props 로 넘긴다.
  const isError = useSelector((state) => state.isError);

  return <PureInboxScreen error={isError} />;
}