import React from "react";
import PropTypes from "prop-types";
import { Rect } from 'react-konva';

const EditorRect = ({ width, height, fillPatternImage, ...rest }) => (
  <Rect width={width} height={height} fillPatternImage={fillPatternImage} {...rest} />
);

EditorRect.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  fillPatternImage: PropTypes.object,
};

export default EditorRect;