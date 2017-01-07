import  { v4 } from 'node-uuid'

import data from './LibraryList.json'

const initialState = [
  {
    "id": v4(),
    "title": "Sample Todo",
    "description": "exmp"
  }
]

//const todId = 1;

export default (state = data, action) => {
  switch (action.type) {
    case 'select_library':
      return state.map(todo => {
        if (todo.id !== action.payloadId) {
          return todo;
        }

        return {
          ...todo,
          title: action.payloadTitle,
          description: action.payloadDescription
        }
      })

    case 'add_library':
      return [
        ...state, {
          id: v4(),
          title: action.payloadTitle,
          description: action.payloadDescription
        }
      ]

    case 'remove_library':
        console.log(action.payloadId + ' SELECTED')

        const todoId = action.payloadId;
          return state.filter(todo => todo.id !== todoId);

    default:
      return state;
  }
}
