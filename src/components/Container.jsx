import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import FlexBox from "./FlexBox";
import "./Container.css";

export const Container = ({ maxWidth, centered, children }) => {
  const containerClassName = classNames({ "container-centered": centered });

  return <FlexBox column className={containerClassName} style={{ maxWidth }}>{children}</FlexBox>
};

Container.propTypes = {
  maxWidth: PropTypes.number,
  centered: PropTypes.bool,
};

Container.defaultProps = {
  maxWidth: 1200,
  centered: true,
};

export default Container;