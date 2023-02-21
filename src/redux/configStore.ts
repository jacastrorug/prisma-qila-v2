import { createWrapper } from "next-redux-wrapper";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import reducer from "./reducers";

const initialState: StateModel = {
    menu_is_open: false,
};

const middleware = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

const makeStore = () => store;
const wrapper = createWrapper(makeStore);

export { wrapper, store };
