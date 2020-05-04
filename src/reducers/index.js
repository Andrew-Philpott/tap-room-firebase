import { combineReducers } from "redux";
import beerListReducer from "./beer-list-reducer";
import newBeerFormVisibilityReducer from "./new-beer-form-visibility-reducer";
import editBeerFormVisibilityReducer from "./edit-beer-form-visibility-reducer";
import selectBeerReducer from "./select-beer-reducer";
import { firestoreReducer } from "redux-firestore";

const rootReducer = combineReducers({
  beerList: beerListReducer,
  newBeerForm: newBeerFormVisibilityReducer,
  editBeerForm: editBeerFormVisibilityReducer,
  selectBeer: selectBeerReducer,
  firestore: firestoreReducer,
});

export default rootReducer;
