import './style.css';
import Icon from './loading.png';
import Icon2 from './verticaldots.png';
import { checked } from './complete';
import { unchecked } from './complete';

const mainList = document.getElementById('main-list');
const loadingIcon = new Image();
loadingIcon.src = Icon;

const taskArray = [{
  description: 'Complete day 1 milestone',
  completed: false,
  index: 2,
},
{
  description: 'Do the laundry',
  completed: false,
  index: 3,
},
{
  description: 'Wash the dishes',
  completed: false,
  index: 1,
},
];

function sort() {
  taskArray.sort((a, b) => a.index - b.index);
}

function paintList() {
  sort();
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
    inputText.innerHTML = `<p>${element.description}</p>`;
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

document.addEventListener('DOMContentLoaded', paintList());

var checkboxes = document.querySelectorAll("input[class=list-box]");
console.log(checkboxes)

Array.from(checkboxes).forEach(box => {
  box.addEventListener('change', (event) => {
    if(event.target.checked) {
      checked(event.target.id, taskArray)
      console.log(taskArray)
    } else {
      unchecked(event.target.id, taskArray)
      console.log(taskArray)
    }
  })
})