import { drawImageFromList } from '../toolkit/buttonEvents/facadeWorkersUtils/uploadFile/drawImageOnCanvas';

let imageListElement = null;
const images = [];
let newImageId = 0;

function findImageListElement() {
  imageListElement = document.getElementById('image-list');
}

function initialiseImageListFunctionality() {
  findImageListElement();
}

function createImageElementMarkup(imageText, id) {
  return `
  <div id="imageId${id}" onClick="selectImageFromList(${id})" class="image${id} imageListItem">
    <div id="imageText${id}" spellcheck="false" class="imageText" contentEditable="false" style="user-select: none; padding-right: 29px; border: 1px solid transparent; display: grid;">${imageText}</div>
    </div>
  </div>
  `;
}

function initialiseParentElement() {
  return document.createElement('div');
}

function addNewImageToList(imageText, imageData) {
  const imageElement = initialiseParentElement();
  imageElement.id = newImageId;
  images.push(imageData);
  imageElement.innerHTML = createImageElementMarkup(imageText, newImageId);
  const newRow = imageListElement.insertRow(-1);
  const cell = newRow.insertCell(0);
  cell.appendChild(imageElement);
  imageListElement.scrollLeft = 0;
  cell.scrollIntoView();
  newImageId += 1;
}

function removeimageFromListOnShapeDelete(id) {
  if (id != null) {
    let index = 0;
    const tableList = imageListElement.childNodes[1].childNodes;
    while (index !== tableList.length) {
      if (parseInt(tableList[index].childNodes[0].childNodes[0].id, 10) === id) {
        tableList[index].remove();
        break;
      }
      index += 1;
    }
  }
}

window.selectImageFromList = (id) => {
    drawImageFromList(images[id]);
};

export { initialiseImageListFunctionality, addNewImageToList, removeimageFromListOnShapeDelete };