import { paintList } from "."
import TrashIcon from './trashcan.png'


function addTask(arr, value) {
  arr.push({description: `${value}`, completed: false, index: (arr.length+1)});
  localStorage.setItem('taskArray', JSON.stringify(arr));
  paintList()
}

function removeItem(event, arr) {
  const itemIndex = event.target.getAttribute('value');
  arr.splice(itemIndex, 1);
  arr.forEach(item => {
    if (item.index > itemIndex) {
      item.index = item.index-1;
    }
  })
  localStorage.setItem('taskArray', JSON.stringify(arr));
}

function edit(event, arr) {
  const checkIfOpened = event.target.parentNode.getAttribute('value');
  if (checkIfOpened !== null) {
    return
  }
  const value = event.target.getAttribute('value')
  const initialState = event.target.innerHTML;
  event.target.innerHTML = `<input class="description" id="input${value}" value="${arr[value].description}"></input>`
  const inputField = document.getElementById(`input${value}`);
  const imageChange = document.querySelector(`img[value="${value}"]`)
  const initialImage = imageChange.src
  imageChange.addEventListener('click', event => {
    removeItem(event, arr);
  })
  imageChange.src = TrashIcon;
  inputField.focus()
  inputField.addEventListener('focusout', (e) => {
    e.target.outerHTML = initialState;
    imageChange.src = initialImage;
  })
  inputField.addEventListener('keydown', (e) => {
    if (e.key === "Enter") {
      arr[value].description = `${inputField.value}`
      localStorage.setItem('taskArray', JSON.stringify(arr));
      paintList();
    }
  } )
}

export function itemListener(arr) {
  const descriptions = document.querySelectorAll(".description")
  const addField = document.querySelector(".list-input")
  Array.from(descriptions).forEach((desc, index) => {
    desc.addEventListener('click', event => {
      edit(event, arr)
    })
  })
  addField.addEventListener('click', event => {
    event.target.setAttribute('class', 'list-input-clicked');
  })
  addField.addEventListener('focusout', event => {
    event.target.setAttribute('class', 'list-input');
  })
  addField.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      addTask(arr, addField.value);
      addField.setAttribute('class', 'test');
    };
  })
}

export function removeAll(arr) {
    arr = arr.filter(element => {
      return element.completed === false
    });
    arr.forEach((element, i) => {
      element.index = i+1;
    })
    localStorage.setItem('taskArray', JSON.stringify(arr));
    return arr;
}



