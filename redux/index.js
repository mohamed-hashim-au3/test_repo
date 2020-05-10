import { createStore, applyMiddleware, combineReducers } from 'redux'
// import { composeWithDevTools } from 'redux-devtools-extension'
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import sessionStorage from "redux-persist/lib/storage/session";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { createStateSyncMiddleware } from "redux-state-sync";

const SET_CLIENT_STATE = 'SET_CLIENT_STATE';
const middlewares = [
    thunk,
    createStateSyncMiddleware({
      // blacklist: ["extras", "products"]
      whitelist: [
        "user",
      ]
    })
];

const persistConfig = {
    key: "root",
    storage,
    whitelist: [
      "user",
      "loggedInDoctor",
      "loggedInPatient",
    ]
};

const sessionRedConfig = {
    key: "referrer",
    storage: sessionStorage
};

const { referrer, ...otherReducer } = rootReducer;

const allReducers = combineReducers({
    ...otherReducer,
    referrer: persistReducer(sessionRedConfig, referrer)
});

const persistedReducer = persistReducer(persistConfig, allReducers);


const makeConfiguredStore = (reducer, initialState) =>
    createStore(reducer, initialState, applyMiddleware(...middlewares));

    
export const makeStore = (initialState, {isServer, req, debug, storeKey}) => {
  if (isServer) {
      initialState = initialState || {fromServer: 'foo'};
      return makeConfiguredStore(allReducers, initialState);
  } else {
      // we need it only on client side
      const store = makeConfiguredStore(persistedReducer, initialState);
      store.__persistor = persistStore(store); // Nasty hack
      return {
        ...store,
        store
      };
  }
};

export const setClientState = (clientState) => ({
  type: SET_CLIENT_STATE,
  payload: clientState
});