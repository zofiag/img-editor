import React from "react";
import { Group as GroupKonva } from "react-konva";

// https://konvajs.org/api/Konva.Group.html
export const Group = (props) => (
  <GroupKonva {...props} />
);

Group.propTypes = {
  ...GroupKonva.propTypes,
};

export default Group;
