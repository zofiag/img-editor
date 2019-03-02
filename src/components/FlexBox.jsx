import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./FlexBox.css";

export const FlexBox = ({ row, column, vCentered, hCentered, children, className, ...rest }) => {
  const flexBoxClassName = classNames("flex-box", {
    "flex-box-row": row,
    "flex-box-column": column,
    "flex-box-hcentered": hCentered,
    "flex-box-vcentered": vCentered,
  }, className);

  return <div {...rest} className={flexBoxClassName}>{children}</div>;
};

FlexBox.propTypes = {
  row: PropTypes.bool,
  column: PropTypes.bool,
  vCentered: PropTypes.bool,
  hCentered: PropTypes.bool,

  children: PropTypes.node,
  className: PropTypes.string,
};

FlexBox.defaultProps = {
  row: true,
};

export default FlexBox;