import * as constant from "./constant";
import { fromJS } from "immutable";
// let cw_login = localStorage.getItem("cw_login")
//   ? JSON.parse(localStorage.getItem("cw_login"))
//   : {};
const cw_menu = sessionStorage.getItem("cw_menu") ? JSON.parse(sessionStorage.getItem("cw_menu")):[];
  let cw_authorization = sessionStorage.getItem("cw_authorization")
  ? sessionStorage.getItem("cw_authorization")
  : false
const defaultState = fromJS({
  cw_remember: "",
  // cw_login,
  cw_menu,
  cw_authorization,
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case constant.CHANGE_USER:
      sessionStorage.setItem("cw_authorization",action.value)
      return state.set("cw_authorization",action.value)
    case constant.CHANGE_MENU:
      sessionStorage.setItem("cw_menu",JSON.stringify( action.value))
      console.log(action.value,"设置")
      return state.set("cw_menu",action.value);
    default:
      return state;
  }
};