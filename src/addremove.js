export function addTask(arr, value) {
  arr.push({ description: `${value}`, completed: false, index: (arr.length + 1) });
  localStorage.setItem('taskArray', JSON.stringify(arr));
}

export function removeItem(event, arr) {
  const itemIndex = event.target.getAttribute('value');
  arr.splice(itemIndex, 1);
  arr.forEach(item => {
    if (item.index > itemIndex) {
      item.index -= 1;
    }
  });
  localStorage.setItem('taskArray', JSON.stringify(arr));
}

export function edit(event, arr, value) {
  const inputField = document.getElementById(`input${value}`);
  arr[value].description = `${inputField.value}`;
  localStorage.setItem('taskArray', JSON.stringify(arr));
}

export function removeAll(arr) {
  arr = arr.filter(element => element.completed === false);
  arr.forEach((element, i) => {
    element.index = i + 1;
  });
  localStorage.setItem('taskArray', JSON.stringify(arr));
  return arr;
}
