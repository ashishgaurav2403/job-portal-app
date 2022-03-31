import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { jobsReducer } from "./reducers/jobsReducer";
import { loaderReducer } from "./reducers/loaderReducer";
import { usersReducer } from "./reducers/usersReducer";
 



const rootReducer = combineReducers({
    jobsReducer: jobsReducer,
    loaderReducer:loaderReducer,
    usersReducer:usersReducer,
  })
  
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
  );
  
  export default store;