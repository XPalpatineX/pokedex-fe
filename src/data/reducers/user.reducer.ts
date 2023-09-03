const initialState = {
  username: null,
};

export function userReducer(state = initialState, action: any) {
  switch (action.type) {
    case '1':
      return { ...state }
    case '2':
      return { ...state }
    default:
      return state
  }
}