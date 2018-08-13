import React from "react";

const Container = ({ children, columns }) => {
  return (
    <React.Fragment>
      <div className="row d-flex align-items-center mb-5">
        <div className={columns}>{children}</div>
      </div>
    </React.Fragment>
  );
};

export default Container;
