const initialState = [
  {
    "id": 0,
    "title": "Webpack",
    "description": "lorem ipsum description"
  },
  {
    "id": 1,
    "title": "React",
    "description": "React description"
  }
]

const todId = 2;

export default (state = [''], action) => {
  switch (action.type) {
    case 'select_library':
    console.log('PRESSED')
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
          id: todId++,
          title: action.payloadTitle,
          description: action.payloadDescription
        }
      ]

    default:
      return state;
  }
}
