import { createStore } from "redux";
import RootReducer from "./RootReducer";

const initialState = {};

const Store = createStore(RootReducer, initialState);

export default Store;