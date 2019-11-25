import { GET_LIST, SET_NAV_SELECTED } from '../type/type'

const defaultState = {
  navKey: 'home'
}
export default (state = defaultState, action) => {
  if (action.type === GET_LIST) {
    console.log(action)
    return {
      ...state,
      nima: '你吗的'
    }
  } else if (action.type === SET_NAV_SELECTED) {
    console.log(action)
    return {
      ...state,
      navKey: action.value
    }
  }
  return state
}