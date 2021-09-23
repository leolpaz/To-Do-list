import { paintList } from ".";

export function checked(id, arr) {
  arr[id].completed = true;
  paintList()
}

export function unchecked(id, arr) {
  arr[id].completed = false;
  paintList()
}