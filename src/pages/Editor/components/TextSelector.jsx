import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import FontFaceObserver from "fontfaceobserver";

import { FlexBox } from "components";

const TextSelector = ({ text = "", textFontFamily, className, onAdd, onFontFamilyChange }) => {
  const [inputText, setInputText] = useState(text);
  const fontFamilies = ["Arial", "Times New Roman", "Open Sans"];
  const fontFamiliesAsync = ["Open Sans"];

  useEffect(() => {
    if (text === inputText) return;
    setInputText(text);
  }, [text]);

  const handleFontFamilyChange = async (newFontFamily) => {
    if (newFontFamily === textFontFamily) return;
    const loaded = !fontFamiliesAsync.includes(newFontFamily) || await new FontFaceObserver(newFontFamily).load();

    if (!loaded) return;
    onFontFamilyChange(newFontFamily);
  }

  const handleAddText = (newText) => {
    if (newText === text) return;
    onAdd(newText);
  }

  return (
    <FlexBox column className={className}>
      <label>
        <span style={{ display: "none" }}>Add text</span>
        <input name="text" type="text" onChange={ev => setInputText(ev.currentTarget.value)} value={inputText} />
      </label>

      <FlexBox column>
        {fontFamilies.map((fontFamily, index) => (
          <label key={index}>
            <input
              type="radio"
              name={`font-family-${index}`}
              value={fontFamily}
              checked={fontFamily === textFontFamily}
              onChange={ev => handleFontFamilyChange(ev.currentTarget.value)} />
              {fontFamily}
          </label>
        ))}
      </FlexBox>

      <button onClick={() => handleAddText(inputText)}>
        {`${!text ? "Add" : "Edit"} text`}
      </button>
    </FlexBox>
  );
};

TextSelector.propTypes = {
  text: PropTypes.string,
  textFontFamily: PropTypes.string,
  className: PropTypes.string,
  onAdd: PropTypes.func.isRequired,
  onFontFamilyChange: PropTypes.func.isRequired,
};

export default TextSelector;