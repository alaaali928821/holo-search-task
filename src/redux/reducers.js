import { ActionType } from "./actionTypes"

const initialState = {
    searchType: 'users',
    searchQuery: '',
    searchResults: [],
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case ActionType.SET_SEARCH_TYPE:
        return { ...state, searchType: action.payload };
      case ActionType.SET_SEARCH_QUERY:
        return { ...state, searchQuery: action.payload };
      case ActionType.SET_SEARCH_RESULTS:
        return { ...state, searchResults: action.payload };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  