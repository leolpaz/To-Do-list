import './style.css';
import Icon from './loading.png';
import Icon2 from './verticaldots.png';
import TrashIcon from './trashcan.png';
import {
  checked,
  unchecked,
} from './complete';
import {
  removeAll,
  addTask,
  removeItem,
  edit,
} from './addremove';

const mainList = document.getElementById('main-list');
const loadingIcon = new Image();
loadingIcon.src = Icon;
let taskArray = JSON.parse(localStorage.getItem('taskArray') || '[]');
const forceChange = new Event('change', { bubbles: true });

function paintList() {
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
    verticalDotsIcon.setAttribute('value', index);
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
    inputText.setAttribute('value', `${index}`);
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
}

function buttonListener() {
  const checkboxes = document.querySelectorAll('.list-box');
  Array.from(checkboxes).forEach(box => {
    box.addEventListener('change', (event) => {
      if (event.target.checked) {
        checked(event.target.id, taskArray);
      } else {
        unchecked(event.target.id, taskArray);
      }
    });
  });
}

function itemListener() {
  const addField = document.querySelector('.list-input');
  addField.addEventListener('click', event => {
    event.target.setAttribute('class', 'list-input-clicked');
  });
  addField.addEventListener('focusout', event => {
    event.target.setAttribute('class', 'list-input');
  });
  addField.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      addTask(taskArray, addField.value);
    }
  });
}

function descriptionListener() {
  const descriptions = document.querySelectorAll('.description');
  Array.from(descriptions).forEach((desc) => {
    desc.addEventListener('click', event => {
      const checkIfOpened = event.target.parentNode.getAttribute('value');
      if (checkIfOpened !== null) {
        return;
      }
      const value = event.target.getAttribute('value');
      const initialState = event.target.innerHTML;
      event.target.innerHTML = `<input class="description" id="input${value}" value="${taskArray[value].description}"></input>`;
      const inputField = document.getElementById(`input${value}`);
      inputField.focus();
      const imageChange = document.querySelector(`img[value="${value}"]`);
      const initialImage = imageChange.src;
      imageChange.addEventListener('click', e => {
        removeItem(e, taskArray);
        mainList.dispatchEvent(forceChange);
      });
      imageChange.src = TrashIcon;
      inputField.addEventListener('focusout', (e) => {
        e.target.outerHTML = initialState;
        imageChange.src = initialImage;
      });
      inputField.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          edit(event, taskArray, value);
        }
      });
    });
  });
}

function removeAllListener() {
  const removeAllBtn = document.querySelector('.list-button');
  removeAllBtn.addEventListener('click', () => {
    taskArray = removeAll(taskArray);
    mainList.dispatchEvent(forceChange);
  });
}

document.addEventListener('DOMContentLoaded', paintList());
document.addEventListener('DOMContentLoaded', buttonListener);
document.addEventListener('DOMContentLoaded', itemListener());
document.addEventListener('DOMContentLoaded', descriptionListener());
document.addEventListener('DOMContentLoaded', removeAllListener());
mainList.addEventListener('change', paintList);
mainList.addEventListener('change', () => {
  buttonListener();
  itemListener();
  descriptionListener();
  removeAllListener();
});
