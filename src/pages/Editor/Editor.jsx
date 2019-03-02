import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Stage, Layer } from "react-konva";

import { FlexBox } from "components";

import defaultBgImagePath from "../../static/images/empty_background.bmp";
import EditorRect from "./components/EditorRect";

const Editor = ({ width, height, fillPatternImage, ...rest }) => {
  const [bgImagePath, setBgImagePath] = useState(defaultBgImagePath);
  const [bgImage, setBgImage] = useState();
  const rectSize = 400;

  useEffect(() => {
    const imageObj = new Image();
    imageObj.onload = function () {
      setBgImage(imageObj);
    };
    imageObj.src = bgImagePath;
  }, bgImagePath);

  return (
    <FlexBox>
      <Stage width={rectSize} height={rectSize}>
        <Layer>
          <EditorRect width={rectSize} height={rectSize} fillPatternImage={bgImage} />
        </Layer>
      </Stage>
    </FlexBox>
  );
};

Editor.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  fillPatternImage: PropTypes.object,
};

export default Editor;