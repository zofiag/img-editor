import React, { useState } from "react";
import PropTypes from "prop-types";

import { FlexBox } from "components";

// import "./.css";

const TextSelector = ({ text = "", onAdd }) => {
  const [inputText, setInputText] = useState(text);

  return (
    <FlexBox column>
      <label>
        Add text
        <input type="text" onChange={ev => setInputText(ev.currentTarget.value)} value={inputText} />
      </label>
      <button onClick={() => onAdd(inputText)}>Add text</button>
    </FlexBox>
  );
};

TextSelector.propTypes = {
  text: PropTypes.string,
  onAdd: PropTypes.func.isRequired,
};

export default TextSelector;