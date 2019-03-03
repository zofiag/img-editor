import React from "react";
import { Rect as RectKonva } from "react-konva";

// https://konvajs.org/api/Konva.Rect.html
export const Rect = React.forwardRef((props, ref) => (
  <RectKonva ref={ref} {...props} />
));

Rect.propTypes = {
  ...RectKonva.propTypes,
};

export default Rect;
