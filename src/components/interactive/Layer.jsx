import React from "react";
import { Layer as LayerKonva } from "react-konva";

// https://konvajs.org/api/Konva.Layer.html
export const Layer = React.forwardRef((props, ref) => (
  <LayerKonva ref={ref} {...props} />
));

Layer.propTypes = {
  ...LayerKonva.propTypes,
};

export default Layer;
