import React from "react";
import PropTypes from "prop-types";

import { FlexBox } from "components";

import kirbyBg from "static/images/kirby.jpg";
import "./BgSelector.css";

const bgImgPaths = [kirbyBg];

const BgSelectorItem = ({ bgPath, onClick }) => (
  <button
    className={"bg-selector-item"}
    onClick={() => onClick(bgPath)}
    style={{ backgroundImage: `url(${bgPath})` }}
  />
);

const BgSelector = ({ onChange }) => (
  <FlexBox column>
    {bgImgPaths.map(bgPath => <BgSelectorItem key={bgPath} bgPath={bgPath} onClick={onChange} />)}
    <button onClick={() => onChange(null)}>Delete background</button>
  </FlexBox>
);

BgSelector.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default BgSelector;