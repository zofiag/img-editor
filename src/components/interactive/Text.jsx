import React from "react";
import { Text as TextKonva } from "react-konva";

// https://konvajs.org/api/Konva.Text.html
export const Text = ({ align = "center", ...rest }) => (
  <TextKonva align={align} {...rest} />
);

Text.propTypes = {
  ...TextKonva.propTypes,
};

export default Text;
