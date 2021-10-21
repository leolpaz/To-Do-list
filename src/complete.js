export default function changed(id, arr) {
  arr[id].completed = !arr[id].completed;
  localStorage.setItem('taskArray', JSON.stringify(arr));
}