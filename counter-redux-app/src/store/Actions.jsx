export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const EDIT_TODO = 'EDIT_TODO';

export function addTodo(text) {
  return { type: ADD_TODO, text };
}

export function removeTodo(id) {
  return { type: REMOVE_TODO, id };
}

export function editTodo(id, text) {
  return { type: EDIT_TODO, id, text };
}
