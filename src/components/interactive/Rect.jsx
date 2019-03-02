import React from "react";
import { Rect as RectKonva } from "react-konva";

// https://konvajs.org/api/Konva.Rect.html
export const Rect = (props) => (
  <RectKonva {...props} />
);

Rect.propTypes = {
  ...RectKonva.propTypes,
};

export default Rect;
