import React, { useState, useEffect, useRef } from "react";

import { FlexBox, Rect, Stage, Layer } from "components";

import defaultBgImagePath from "static/images/empty_background.bmp";
import BgSelector from "./components/BgSelector";
import TextSelector from "./components/TextSelector";
import ImgText from "./components/ImgText";

import "./Editor.css";

const Editor = () => {
  const [bgImagePath, setBgImagePath] = useState(defaultBgImagePath);
  const [bgImage, setBgImage] = useState();
  const [imgText, setImgText] = useState();
  const [imgTextFontFamily, setImgTextFontFamily] = useState("Arial");
  const [isDownloadImgMode, setDownloadImgMode] = useState(false);
  const stageRef = useRef();
  const rectSize = 400;

  useEffect(() => {
    const imageObj = new Image();
    imageObj.onload = function () {
      setBgImage(imageObj);
    };
    imageObj.src = bgImagePath;
  }, [bgImagePath]);

  useEffect(() => {
    if (!isDownloadImgMode) return;
    handleDownloadAsImage();
  }, [isDownloadImgMode]);

  const handleDownloadAsImage = () => {
    const href = stageRef.current.getStage().toDataURL();
    const link = document.createElement('a');

    link.download = 'wow.png';
    link.href = href;
    link.click();
    setDownloadImgMode(false);
  };

  return (
    <FlexBox className="editor">
      <FlexBox column className="editor-column">
        <h3 className="editor-column-title">Select background</h3>
        <BgSelector onChange={setBgImagePath} />
        <button
          disabled={bgImagePath === defaultBgImagePath}
          onClick={() => setBgImagePath(defaultBgImagePath)}>
            Delete background
        </button>
      </FlexBox>

      <FlexBox column className="editor-column">
        <h3 className="editor-column-title">Simple editor</h3>
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
                onTextDelete={!isDownloadImgMode ? (() => setImgText("")) : undefined}
              />
            )}
          </Layer>
        </Stage>

        <button onClick={() => setDownloadImgMode(true)}>Download as image</button>
      </FlexBox>

      <FlexBox column className="editor-column">
        <h3 className="editor-column-title">Add text</h3>
        <TextSelector
          text={imgText}
          textFontFamily={imgTextFontFamily}
          onAdd={setImgText}
          onFontFamilyChange={setImgTextFontFamily}
        />
      </FlexBox>
    </FlexBox>
  );
};

export default Editor;