const initialState = {
    button: false,  // Ensure this structure matches the state you're using
  };
  
  export const Reducers = (state = initialState, action) => {
    switch (action.type) {
      case 'BUTTON':
        return { ...state, button: !state.button };
      default:
        return state;
    }
  };
  