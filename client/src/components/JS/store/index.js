/*import { createStore,  applyMiddleware } from "redux";
import rootReducer from "../reducers/index"
import thunk from "redux-thunk";

const store = createStore(
    rootReducer,
  
    applyMiddleware(thunk),

      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

  );




  export default store;*/
  import { createStore, compose, applyMiddleware } from "redux";
  import rootReducer from "../reducers/index"
  import thunk from "redux-thunk";
  
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  
  export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  );  export default store