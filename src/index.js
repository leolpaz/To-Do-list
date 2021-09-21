const taskArray = [{
  description: "Complete day 1 milestone",
  completed: false,
  index: 2
},
{
  description: "Wash the dishes",
  completed: false,
  index: 1
}];

function sort() {
  taskArray.sort((a, b) => {
    return a.index - b.index
  })
};

function paintList() {
  const main_list = document.getElementById("main-list")
  sort();
  taskArray.forEach((element) => {
    const list_item = document.createElement("li");
    const item_text = document.createTextNode(`${element.description}`)
    list_item.appendChild(item_text)
    main_list.appendChild(list_item)
  })
};

paintList()