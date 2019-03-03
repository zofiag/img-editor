import React from "react";
import { Stage as StageKonva } from "react-konva";

// https://konvajs.org/api/Konva.Stage.html
export const Stage = React.forwardRef((props, ref) => (
  <StageKonva ref={ref} {...props} />
));

Stage.propTypes = {
  ...StageKonva.propTypes,
};

export default Stage;
