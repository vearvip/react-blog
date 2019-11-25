import { SET_NAV_SELECTED_ITEM_KEY } from "../type/type";

// 设置被选中的那个item key
export const setNavSelectedItemKeyAction = value => {
  return {
    type: SET_NAV_SELECTED_ITEM_KEY,
    value
  }
}