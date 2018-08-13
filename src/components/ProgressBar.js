import React from "react";

const ProgressBar = ({ percentage }) => {
  const barHeight = {
    height: "17px"
  };

  const progressValue = {
    width: percentage + "%"
  };

  const spanLabel = {
    marginLeft: "15px"
  };

  const valueNow = Math.round(percentage);

  const getClasses = value => {
    if (value <= 40) {
      return "progress-bar progress-bar-striped bg-danger";
    } else if (value > 40 && value < 85) {
      return "progress-bar progress-bar-striped bg-warning";
    } else {
      return "progress-bar progress-bar-striped bg-success";
    }
  };

  const classes = getClasses(percentage);

  return (
    <div className="progress mt-3 mb-2" style={barHeight}>
      <div
        className={classes}
        role="progressbar"
        style={progressValue}
        aria-valuenow={valueNow}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <span style={spanLabel}>{valueNow}%</span>
      </div>
    </div>
  );
};

export default ProgressBar;
