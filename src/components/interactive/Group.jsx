import React from "react";
import { Group as GroupKonva } from "react-konva";

// https://konvajs.org/api/Konva.Group.html
export const Group = React.forwardRef((props, ref) => (
  <GroupKonva ref={ref} {...props} />
));

Group.propTypes = {
  ...GroupKonva.propTypes,
};

export default Group;
