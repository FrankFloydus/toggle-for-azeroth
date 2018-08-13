import React from "react";

const Alert = ({ dismiss }) => {
  return (
    <div
      className="alert alert-success alert-dismissible fade show"
      role="alert"
    >
      <strong>Toggle For Azeroth</strong> use the browser
      <a
        target="_blank"
        href="https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage"
        class="alert-link"
      >
        &nbsp;localStorage&nbsp;
      </a>
      to save your data; you don't lose your tracking unless you clear the
      cache.
      <button
        onClick={() => dismiss()}
        type="button"
        className="close"
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
};

export default Alert;
