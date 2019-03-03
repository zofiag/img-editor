import React, { useState, useEffect, useRef } from "react";

import { FlexBox, Rect, Stage, Layer } from "components";

import defaultBgImagePath from "static/images/empty_background.bmp";
import BgSelector from "./components/BgSelector";
import TextSelector from "./components/TextSelector";
import ImgText from "./components/ImgText";

const Editor = () => {
  const [bgImagePath, setBgImagePath] = useState(defaultBgImagePath);
  const [bgImage, setBgImage] = useState();
  const [imgText, setImgText] = useState();
  const [imgTextFontFamily, setImgTextFontFamily] = useState("Arial");
  const stageRef = useRef();
  const rectSize = 400;

  useEffect(() => {
    const imageObj = new Image();
    imageObj.onload = function () {
      setBgImage(imageObj);
    };
    imageObj.src = bgImagePath;
  }, [bgImagePath]);

  const handleDownloadAsImage = () => {
    const href = stageRef.current.getStage().toDataURL();
    const link = document.createElement('a');

    link.download = 'wow.png';
    link.href = href;
    link.click();
  };

  return (
    <FlexBox>
      <FlexBox column>
        <BgSelector onChange={setBgImagePath} />
        <button
          disabled={bgImagePath === defaultBgImagePath}
          onClick={() => setBgImagePath(defaultBgImagePath)}>
            Delete background
        </button>
      </FlexBox>

      <FlexBox column>
        <Stage width={rectSize} height={rectSize} ref={stageRef}>
          <Layer>
            <Rect
              width={rectSize}
              height={rectSize}
              fillPatternImage={bgImage}
              fillPatternScaleX={!bgImage ? 1 : 1 / (bgImage.width / rectSize)}
              fillPatternScaleY={!bgImage ? 1 : 1 / (bgImage.height / rectSize)}
              fillPatternRepeat="no-repeat"
            />

            {!imgText ? null : (
              <ImgText
                text={imgText}
                fontFamily={imgTextFontFamily}
                onTextDelete={() => setImgText("")}
              />
            )}
          </Layer>
        </Stage>

        <button onClick={handleDownloadAsImage}>Download as image</button>
      </FlexBox>

      <TextSelector
        text={imgText}
        textFontFamily={imgTextFontFamily}
        onAdd={setImgText}
        onFontFamilyChange={setImgTextFontFamily}
      />
    </FlexBox>
  );
};

export default Editor;