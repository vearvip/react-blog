import { SET_NAV_SELECTED_ITEM_KEY } from '../type/type'

const defaultState = {
  navSelectedItemKey: 'home'
}
export default (state = defaultState, action) => {
  if (action.type === SET_NAV_SELECTED_ITEM_KEY) {
    console.log('收到来自组件的action', action)
    return {
      ...state,
      navSelectedItemKey: action.value
    }
  }
  return state
}