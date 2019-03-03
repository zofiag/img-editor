import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import FontFaceObserver from "fontfaceobserver";

import { FlexBox } from "components";

// import "./.css";

const TextSelector = ({ text = "", textFontFamily, onAdd, onFontFamilyChange }) => {
  const [inputText, setInputText] = useState(text);
  const fontFamilies = ["Arial", "Times New Roman", "Open Sans"];
  const fontFamiliesAsync = ["Open Sans"];

  useEffect(() => {
    if (text === inputText) return;
    setInputText(text);
  }, [text]);

  const handleFontFamilyChange = async (fontFamily) => {
    const loaded = !fontFamiliesAsync.includes(fontFamily) || await new FontFaceObserver(fontFamily).load();

    if (!loaded) return;
    onFontFamilyChange(fontFamily);
  }

  return (
    <FlexBox column>
      <label>
        Add text
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

      <button onClick={() => onAdd(inputText)}>Add text</button>
    </FlexBox>
  );
};

TextSelector.propTypes = {
  text: PropTypes.string,
  textFontFamily: PropTypes.string,
  onAdd: PropTypes.func.isRequired,
  onFontFamilyChange: PropTypes.func.isRequired,
};

export default TextSelector;