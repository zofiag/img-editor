import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Stage, Layer } from "react-konva";

import { FlexBox } from "components";

import defaultBgImagePath from "static/images/empty_background.bmp";
import EditorRect from "./components/EditorRect";
import BgSelector from "./components/BgSelector";

const Editor = () => {
  const [bgImagePath, setBgImagePath] = useState(defaultBgImagePath);
  const [bgImage, setBgImage] = useState();
  const rectSize = 400;

  useEffect(() => {
    const imageObj = new Image();
    imageObj.onload = function () {
      setBgImage(imageObj);
    };
    imageObj.src = bgImagePath;
  }, [bgImagePath]);

  const handleSetBgImagePath = (_bgPath) => {
    const bgPath = _bgPath || defaultBgImagePath;
    setBgImagePath(bgPath);
  };

  return (
    <FlexBox>
      <BgSelector onChange={handleSetBgImagePath} />
      <Stage width={rectSize} height={rectSize}>
        <Layer>
          <EditorRect
            width={rectSize}
            height={rectSize}
            fillPatternImage={bgImage}
            fillPatternScaleX={!bgImage ? 1 : 1 / (bgImage.width / rectSize)}
            fillPatternScaleY={!bgImage ? 1 : 1 / (bgImage.height / rectSize)}
            fillPatternRepeat="no-repeat"
        />
        </Layer>
      </Stage>
    </FlexBox>
  );
};

export default Editor;