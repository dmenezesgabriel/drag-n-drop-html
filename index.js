function onDragStart(event) {
  event
    .dataTransfer
    .setData('text/plain', event.target.id);

  event
    .currentTarget
    .style
    .backgroundColor = '#6c757d';
};


function onDragOver(event) {
  event.preventDefault();
};

function onDrop(event) {
  const id = event
    .dataTransfer
    .getData('text');

  const draggableElement = document.getElementById(id);
  const dropzone = event.target;

  dropzone.appendChild(draggableElement);

  event
    .dataTransfer
    .clearData();

  if (event.target.id == 'done') {
    draggableElement
      .style
      .backgroundColor = '#00C851';
  } else if (event.target.id == 'inProgress'){
    draggableElement
      .style
      .backgroundColor = '#4285F4';
  } else {
    draggableElement
      .style
      .backgroundColor = '#fff';
  }
};