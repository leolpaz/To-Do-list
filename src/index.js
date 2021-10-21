import './style.css';
import Icon from './loading.png';
import Icon2 from './verticaldots.png';
import TrashIcon from './trashcan.png';
import changed from './complete';
import {
  removeAll,
  addTask,
  removeItem,
  edit,
} from './addremove';

const mainList = document.getElementById('main-list');
let taskArray = JSON.parse(localStorage.getItem('taskArray') || '[]');
const forceChange = new Event('change', { bubbles: true });

function paintList() {
  mainList.innerHTML = '';
  const loadingIcon = new Image();
  loadingIcon.src = Icon;
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
    verticalDotsIcon.classList.add('cursor-grab')
    verticalDotsIcon.src = Icon2;
    const listItem = document.createElement('li');
    listItem.draggable = false
    listItem.classList.add('list-item');
    listItem.innerHTML = `<input id="${index}" value="${element.completed}" type="checkbox" class="list-box"><p class="description" value="${index}">${element.description}</p>`
    if (element.completed === true) {
      listItem.innerHTML = `<input id="${index}" value="${element.completed}" checked="checked"" type="checkbox" class="list-box">
      <p class="description" style="text-decoration:line-through;color:#ccc" value="${index}">${element.description}</p>`
    }
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
      changed(event.target.id, taskArray);
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
      imageChange.src = TrashIcon;
      imageChange.classList.remove('cursor-grab')
      const removeListener = (event) => {
        removeItem(event, taskArray);
        mainList.dispatchEvent(forceChange);
      };
      imageChange.addEventListener('click', removeListener);
      inputField.addEventListener('focusout', (e) => {
        setTimeout(() => {
          imageChange.removeEventListener('click', removeListener);
          e.target.outerHTML = initialState;
          imageChange.src = initialImage;
          imageChange.classList.add('cursor-grab')
        }, 100);
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

function dragItems() {
  const dragIcons = document.querySelectorAll('.list-item img')
  const dragItems = document.querySelectorAll('.list-item')

  // dragItems.forEach(item => {
  //   item.setAttribute('draggable', 'true');
  // })

  dragItems.forEach(item => {
    item.addEventListener('dragstart', (event) => {
    })
    item.addEventListener('mousemove', (event) => {
      const element = event.target.parentNode
      element.style.position = 'absolute';
      element.style.top = `${event.clientY}px`;
      element.style.left = `${event.clientX}px`;
      element.style.width = `${413}px`
      console.log(event)
    })
  })
}


document.addEventListener('DOMContentLoaded', () => {
  paintList();
  buttonListener();
  itemListener();
  descriptionListener();
  removeAllListener();
  dragItems()
});
mainList.addEventListener('change', () => {
  paintList();
  buttonListener();
  itemListener();
  descriptionListener();
  removeAllListener();
});
