import { GET_LIST, SET_NAV_SELECTED } from "../type/type";

export const getListAction = value => {
  return {
    type: GET_LIST,
    value
  }
}
// 设置被选中的那个item key
export const setNavSelectedAction = value => {
  return {
    type: SET_NAV_SELECTED,
    value
  }
}