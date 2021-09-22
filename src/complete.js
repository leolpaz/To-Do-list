export function checked(id, arr) {
  arr[id].completed = true;
}

export function unchecked(id, arr) {
  arr[id].completed = false;
}