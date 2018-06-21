import { ADD_USER, UPDATE_USER, REMOVE_USER, LOADED_EVENT, RANDOM_EVENT } from "../constants/action-types";
import _ from 'lodash';
const initialState = {
  articles: []
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return { ...state, users: [...state.users, action.payload] };
    case UPDATE_USER:
      return {...state, users: state.users.map(user => {
        if(user.id == action.payload.id){
          _.merge({}, user, action.payload)
        }
        return user;
      })}
    case REMOVE_USER
      return {...state, users: state.users.filter(user => {
        return user.id != action.payload
      })}

    default:
      return state;
  }
};
export default rootReducer;
