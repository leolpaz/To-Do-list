import './style.css';
import Icon from './loading.png';
import Icon2 from './verticaldots.png';
import {
  checked,
  unchecked,
} from './complete';
import {
  itemListener,
} from './addremove'

const mainList = document.getElementById('main-list');
const loadingIcon = new Image();
loadingIcon.src = Icon;
let taskArray = [];

if (JSON.parse(localStorage.getItem('taskArray') === null)) {
  taskArray.push({
    description: 'Complete day 1 milestone',
    completed: false,
    index: 2,
  }, {
    description: 'Do the laundry',
    completed: false,
    index: 3,
  }, {
    description: 'Wash the dishes',
    completed: false,
    index: 1,
  });
} else {
  taskArray = (JSON.parse(localStorage.getItem('taskArray')));
}

function sort() {
  taskArray.sort((a, b) => a.index - b.index);
}

export function paintList() {
  sort();
  mainList.innerHTML = '';
  const titleContainer = document.createElement('div');
  const paragraph = document.createElement('p');
  titleContainer.classList.add('title-container');
  paragraph.classList.add('list-tittle');
  paragraph.innerHTML = "Today's To Do";
  titleContainer.appendChild(paragraph);
  titleContainer.appendChild(loadingIcon);
  const addInput = document.createElement('input');
  addInput.classList.add('list-input');
  addInput.setAttribute('placeholder', 'Add to your list...');
  mainList.appendChild(titleContainer);
  mainList.appendChild(addInput);
  taskArray.forEach((element, index) => {
    const verticalDotsIcon = new Image();
    verticalDotsIcon.setAttribute('value', index)
    verticalDotsIcon.src = Icon2;
    const listItem = document.createElement('li');
    listItem.classList.add('list-item');
    const label = document.createElement('label');
    label.setAttribute('for', `element${index}`);
    label.classList.add('list-label');
    const inputCheckbox = document.createElement('input');
    inputCheckbox.setAttribute('id', `${index}`);
    inputCheckbox.setAttribute('value', `${element.completed}`);
    inputCheckbox.setAttribute('type', 'checkbox');
    inputCheckbox.classList.add('list-box');
    const inputText = document.createElement('div');
    inputText.classList.add('description');
    inputText.setAttribute('value', `${index}`)
    inputText.innerHTML = `${element.description}`;
    if (element.completed === true) {
      inputCheckbox.setAttribute('checked', 'checked');
      inputText.style.textDecoration = 'line-through';
      inputText.style.color = '#ccc';
    }
    label.appendChild(inputCheckbox);
    label.appendChild(inputText);
    listItem.appendChild(label);
    listItem.appendChild(verticalDotsIcon);
    mainList.appendChild(listItem);
  });
  const button = document.createElement('button');
  button.setAttribute('type', 'button');
  button.classList.add('list-button');
  button.innerHTML = 'Clear all completed';
  mainList.appendChild(button);
  itemListener(taskArray)
}

function buttonListener() {
  const checkboxes = document.querySelectorAll('.list-box');
  Array.from(checkboxes).forEach(box => {
    box.addEventListener('change', (event) => {
      if (event.target.checked) {
        checked(event.target.id, taskArray);
        localStorage.setItem('taskArray', JSON.stringify(taskArray));
        paintList();
      } else {
        unchecked(event.target.id, taskArray);
        localStorage.setItem('taskArray', JSON.stringify(taskArray));
        paintList();
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', paintList());
document.addEventListener('DOMContentLoaded', buttonListener());
mainList.addEventListener('change', () => {
  buttonListener();
});