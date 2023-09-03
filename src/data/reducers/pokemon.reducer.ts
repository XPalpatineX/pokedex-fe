const initialState = {
  data: [],
  pokemon: null,
  pagination: null,
};

export function pokemonReducer(state = initialState, action: any) {
  switch (action.type) {
    case '1':
      return { ...state }
    case '2':
      return { ...state }
    default:
      return state
  }
}