import labelProperies from './properties';
import { addLabelToList } from '../../../tools/labelList/labelList';

// be careful about this as we will need to look into doing this for multiple
const labelObjects = {};

function addLabel(labelObj, id) {
  labelObjects[id] = labelObj;
  addLabelToList(labelObj.text, id);
}

function getLabelById(id) {
  return labelObjects[id];
}

function removeLabel(id, canvas) {
  canvas.remove(labelObjects[id]);
  delete labelObjects[id];
}

function setPolygonLabelOffsetProps(polygon, point) {
  polygon.labelOffsetLeft = polygon.left
    - (point.x - labelProperies.offsetCoordinates.left);
  polygon.labelOffsetTop = polygon.top
    - (point.y - labelProperies.offsetCoordinates.top);
}

function setLabelsVisibilityProperty(state, canvas) {
  Object.keys(labelObjects).forEach((label) => {
    labelObjects[label].visible = state;
  });
  canvas.renderAll();
}

export {
  setPolygonLabelOffsetProps, getLabelById, addLabel,
  setLabelsVisibilityProperty, removeLabel,
};
