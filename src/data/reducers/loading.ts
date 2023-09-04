const initialState = {
  userLoading: false,
  pokemonAllLoading: false,
  pokemonLoading: false,
};

export function loadingReducer(state = initialState, action: any) {
  switch (action.type) {
    case '1':
      return { ...state }
    case '2':
      return { ...state }
    default:
      return state
  }
}