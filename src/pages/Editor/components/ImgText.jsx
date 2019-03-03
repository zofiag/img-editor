import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import { Text, Group } from "components";

const ImgText = ({ onTextDelete, ...rest }) => {
  const [isFocused, setFocused] = useState(false);
  const imgTextRef = useRef();
  const xPadding = 4;

  return (
    <Group draggable>
      <Text
        fontSize={20}
        padding={12}
        ref={imgTextRef}
        {...rest}
        onClick={() => setFocused(!isFocused)}
      />
      {!isFocused || !onTextDelete ? null : (
        <Text
          text="x"
          fontSize={16}
          padding={xPadding}
          absolutePosition={{ x: imgTextRef.current.getTextWidth() + xPadding, y: -xPadding }}
          onClick={onTextDelete}
        />
      )}
    </Group>
  );
};

ImgText.propTypes = {
  ...Text.propTypes,
  onTextDelete: PropTypes.func,
};

export default ImgText;
