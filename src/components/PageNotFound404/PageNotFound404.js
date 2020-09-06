import React from "react";
import "./pageNotFound.scss";
import SyncProblemIcon from "@material-ui/icons/SyncProblem";
import SentimentVerySatisfiedIcon from "@material-ui/icons/SentimentVerySatisfied";

const PageNotFound404 = props => {
  return (
    <div className="page-404-wrapper">
      <SyncProblemIcon className="page-404-icon" />
      <h1 className="display-3">404 Not found!</h1>
      <h6 className="font-weight-light">
        Maybe you need some coffee...
        <SentimentVerySatisfiedIcon />
      </h6>
    </div>
  );
};

export default PageNotFound404;
