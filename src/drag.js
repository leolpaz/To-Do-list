let dragIndex;
const list = document.querySelector('#main-list');

function dragStart() {
  dragIndex = this.closest('li').getAttribute('value');
}

function dragOver(e) {
  e.preventDefault();
  this.classList.add('over');
}

function dragSave(from, to) {
  const taskArray = JSON.parse(localStorage.getItem('taskArray') || '[]');
  const temp = taskArray[to];
  taskArray[to] = taskArray[from];
  taskArray[from] = temp;
  localStorage.setItem('taskArray', JSON.stringify(taskArray));
  const forceChange = new Event('change', { bubbles: true });
  list.dispatchEvent(forceChange);
}

function swapItems(fromIndex, toIndex) {
  const items = document.querySelectorAll('.list-item');
  const one = document.querySelector(`li[value="${fromIndex}"] p`);
  const two = document.querySelector(`li[value="${toIndex}"] p`);
  items[fromIndex].insertBefore(two, items[fromIndex].children[1]);
  items[toIndex].insertBefore(one, items[toIndex].children[1]);
  dragSave(fromIndex, toIndex);
}

function dragDrop() {
  const dragEndIndex = this.getAttribute('value');
  swapItems(dragIndex, dragEndIndex);
  this.classList.remove('over');
}

function dragLeave() {
  this.classList.remove('over');
}

export {
  dragDrop, dragOver, dragStart, dragLeave,
};