import React from "react";
import { Text as TextKonva } from "react-konva";

// https://konvajs.org/api/Konva.Text.html
export const Text = React.forwardRef(({ align = "center", ...rest }, ref) => (
  <TextKonva ref={ref} align={align} {...rest} />
));

Text.propTypes = {
  ...TextKonva.propTypes,
};

export default Text;
