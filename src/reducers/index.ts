import { combineReducers } from "@reduxjs/toolkit";

import searchOptions from "./searchOptions";
import searchResults from "./searchResults";

export default combineReducers({
  searchOptions,
  searchResults,
});
