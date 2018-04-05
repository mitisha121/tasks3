import { createStore, combineReducers } from 'redux';
import deepFreeze from 'deep-freeze';

/*
 *  state layout:
 *  {
 *   posts: [... Posts ...],
 *   users: [... Users ...],
 *   form: {
 *     user_id: null,
 *     body: "",
 *   },
 * token: {
 * user_id: number,
 * token; string}
 * login: {
 * emaial:string
 * password:string}
 * register: {
 * email: email
 * name: string
 * password: string
 * }
 * }
 *
 * */

 function token(state=null, action) {
     switch (action.type){
        case 'SET_TOKEN':
            return action.token;
        default:
            return state;
     }
}

let empty_login = {
    name:"",
    password:"",
}

function login(state = empty_login, action){
    switch (action.type){
        case 'UPDATE_LOGIN_FORM':
            return Object.assign({}, state, action.data);
        default:
            return state;
    }
}


let empty_register = {
    name: "",
    email: "",
    password: "",
}

function regform(state = empty_register, action){
    switch (action.type){
        case 'UPDATE_REGISTER_FORM':
            return Object.assign({}, state, action.data);
        case 'CLEAR_REGISTER_FORM':
            return empty_register;
        default:
            return state;
    }
}

function tasks(state = [], action) {
    switch (action.type) {
    case 'TASKS_LIST':
      return [...action.tasks];
    case 'ADD_TASK':
      return [action.task, ...state];
    default:
      return state;
    }
}
  
function users(state = [], action) {
    switch (action.type) {
    case 'USERS_LIST':
      return [...action.users];
    case 'ADD_USER':
        return [action.user, ...state];
    default:
      return state;
    }
}

let empty_form = {
  user_id: "",
  title: "",
  desc: "",
  time: 0,
  completed: false,
  token: "",
};


function form(state = empty_form, action) {
  switch (action.type) {
    case 'UPDATE_FORM':
      return Object.assign({}, state, action.data);
    case 'CLEAR_FORM':
        return empty_form;
        case 'SET_TOKEN':
            return Object.assign({}, state, action.token);
    default:
      return state;
  }
}

function root_reducer(state0, action) {
  //console.log("reducer", action);
  // {posts, users, form} is ES6 shorthand for
  // {posts: posts, users: users, form: form}
  let reducer = combineReducers({tasks, users, form, token, login, regform});
  let state1 = reducer(state0, action);
  //console.log("state1", state1);
  return deepFreeze(state1);
};

let store = createStore(root_reducer);
export default store;