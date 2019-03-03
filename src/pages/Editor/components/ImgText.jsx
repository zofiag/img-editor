import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import { Text, Group } from "components";

const ImgText = ({ deleteIconProps, onTextDelete, ...rest }) => {
  const [isFocused, setFocused] = useState(false);
  const imgTextRef = useRef();
  const deleteIconPadding = 4;

  const handleSetFocused = (ev) => {
    if (rest.onClick) rest.onClick(ev);
    if (!onTextDelete) return;
    setFocused(!isFocused);
  }

  return (
    <Group draggable>
      <Text
        fontSize={20}
        padding={12}
        ref={imgTextRef}
        {...rest}
        onClick={handleSetFocused}
      />
      {!isFocused || !onTextDelete ? null : (
        <Text
          text="x"
          fontSize={16}
          padding={deleteIconPadding}
          x={imgTextRef.current.getTextWidth() + 2 * deleteIconPadding}
          y={-deleteIconPadding}
          onClick={onTextDelete}
          {...deleteIconProps}
        />
      )}
    </Group>
  );
};

ImgText.propTypes = {
  ...Text.propTypes,
  deleteIconProps: PropTypes.object,
  onTextDelete: PropTypes.func,
};

export default ImgText;
