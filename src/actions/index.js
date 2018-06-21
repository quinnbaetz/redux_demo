// src/js/actions/index.js
import { ADD_USER, UPDATE_USER, REMOVE_USER, LOADED_EVENT, RANDOM_EVENT } from "../constants/action-types";
export const addArticle = article => ({ type: ADD_ARTICLE, payload: article });


export const addUser: user => ({ type: ADD_ARTICLE, payload: user });
export const removeUser: id => ({ type: ADD_ARTICLE, payload: id });
export const updateUser: (user, changes) => ({ type: ADD_ARTICLE, payload: {user, changes} });
export const loadedEvent: () => ({ type: ADD_ARTICLE, payload: user });
export const randomEvent: () => ({ type: ADD_ARTICLE, payload: user });

