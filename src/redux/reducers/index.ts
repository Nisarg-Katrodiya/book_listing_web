import { persistCombineReducers } from "redux-persist";
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import { Book } from "./Book";
import { Cart } from "./Cart";

const config = {
  key: "primary",
  storage
};

const state = {
  Book,
  Cart
};

export default persistCombineReducers(config, state);
