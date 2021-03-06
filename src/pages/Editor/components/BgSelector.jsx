import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import kirbyBg from "static/images/kirby.jpg";
import doggo from "static/images/doggo.png";
import kitty from "static/images/kitty.png";
import ok from "static/images/ok.png";
import "./BgSelector.css";

const bgImgPaths = [kirbyBg, doggo, kitty, ok];

const BgSelectorItem = ({ bgPath, onClick, style, className, ...rest }) => (
  <button
    className={classNames("bg-selector-item", className)}
    style={{ backgroundImage: `url(${bgPath})`, ...style }}
    onClick={() => onClick(bgPath)}
    {...rest}
  />
);

BgSelectorItem.propTypes = {
  bgPath: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

const BgSelector = ({ onChange, ...rest }) => (
  bgImgPaths.map(bgPath => <BgSelectorItem key={bgPath} bgPath={bgPath} onClick={onChange} {...rest} />)
);

BgSelector.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default BgSelector;