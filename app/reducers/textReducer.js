let initialState = {
  text: 'Default Text',
  isLoading: false,
  error: null,
};

export default texts = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_TEXT_START':
      return Object.assign({}, state, {isLoading: true});
    case 'LOAD_TEXT_SUCCESS':
      return Object.assign({}, state, {text: action.payload, isLoading: false});
    case 'LOAD_TEXT_FAILURE':
      return Object.assign({}, state, {
        error: action.payload,
        isLoading: false,
      });
    default:
      return state;
  }
};
