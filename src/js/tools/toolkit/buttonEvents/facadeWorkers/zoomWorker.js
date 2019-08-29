import { getCanvasProperties } from '../facadeWorkersUtils/uploadFile/uploadImage';

let currentZoom = 1;
let canvas = null;
let canvasProperties = null;
const initialPosition = {};

// problem where a label option in popup is double clicked and on second click the color disappears

function zoomCanvas(canvasObj, action) {
  canvas = canvasObj;
  canvasProperties = getCanvasProperties();
  if (action === 'in') {
    currentZoom += 1;
    canvas.setZoom(currentZoom);
  }
}

window.zoomOverflowScroll = () => {
  canvas.viewportTransform[4] -= 10;
  canvas.requestRenderAll();
  console.log(canvas.viewportTransform[4]);
};

window.zoomOverflowPrepareToScroll = () => {
};

window.zoomOverflowStopScrolling = () => {
  console.log('stop scrolling');
};

export { zoomCanvas as default };
