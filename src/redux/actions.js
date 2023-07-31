import { ActionType } from "./actionTypes"

export const setSearchType = (searchType) => ({
    type: ActionType.SET_SEARCH_TYPE,
    payload: searchType,
  });
  
  export const setSearchQuery = (searchQuery) => ({
    type: ActionType.SET_SEARCH_QUERY,
    payload: searchQuery,
  });
  
  export const setSearchResults = (searchResults) => ({
    type: ActionType.SET_SEARCH_RESULTS,
    payload: searchResults,
  });
  