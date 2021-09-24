export function checked(id, arr) {
  arr[id].completed = true;
  localStorage.setItem('taskArray', JSON.stringify(arr));
}

export function unchecked(id, arr) {
  arr[id].completed = false;
  localStorage.setItem('taskArray', JSON.stringify(arr));
}