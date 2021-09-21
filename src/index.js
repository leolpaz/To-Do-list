import './style.css';
import Icon from './loading.png';
import Icon2 from './verticaldots.png';

const mainList = document.getElementById("main-list")
const loadingIcon = new Image();
loadingIcon.src = Icon;


const taskArray = [{
    description: "Complete day 1 milestone",
    completed: false,
    index: 2
  },
  {
    description: "Wash the dishes",
    completed: false,
    index: 1
  },
  {
    description: "Wash the dishes",
    completed: false,
    index: 1
  }
];

function sort() {
  taskArray.sort((a, b) => {
    return a.index - b.index
  })
};

function paintList() {
  sort();
  const titleContainer = document.createElement("div");
  const paragraph = document.createElement("p");
  titleContainer.classList.add("title-container");
  paragraph.classList.add("list-tittle");
  paragraph.innerHTML = "Today's To Do";
  titleContainer.appendChild(paragraph)
  titleContainer.appendChild(loadingIcon)
  const add_input = document.createElement("input");
  add_input.classList.add("list-input");
  add_input.setAttribute("placeholder", "Add to your list...")
  mainList.appendChild(titleContainer);
  mainList.appendChild(add_input);
  taskArray.forEach((element, index) => {
    const verticalDotsIcon = new Image();
    verticalDotsIcon.src = Icon2
    const list_item = document.createElement("li");
    list_item.classList.add("list-item");
    const label = document.createElement('label');
    label.setAttribute("for", `element${index}`);
    label.classList.add("list-label")
    const input_checkbox = document.createElement('input');
    input_checkbox.setAttribute("id", `element${index}`);
    input_checkbox.setAttribute("value", `${element.completed}`);
    input_checkbox.setAttribute("type", "checkbox");
    input_checkbox.classList.add("list-box")
    const input_text = document.createElement("div");
    input_text.classList.add("description")
    input_text.innerHTML = `<p>${element.description}</p>`;
    label.appendChild(input_checkbox);
    label.appendChild(input_text);
    list_item.appendChild(label);
    list_item.appendChild(verticalDotsIcon);
    mainList.appendChild(list_item);
  })
  const button = document.createElement("button");
  button.setAttribute("type", "button");
  button.classList.add("list-button")
  button.innerHTML = "Clear all completed";
  mainList.appendChild(button)
};

paintList()