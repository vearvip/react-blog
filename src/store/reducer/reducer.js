import {
  SET_NAV_SELECTED_ITEM_KEY,
  GET_TEST_LIST,
  XHR_ERROR_NOTIFY,
  XHR_WARNING_NOTIFY
} from '../type/type'
import { message } from 'antd';

const defaultState = {
  navSelectedItemKey: 'home'
}
export default (state = defaultState, action) => {
  if (action.type === XHR_ERROR_NOTIFY) { // 请求失败或者thunk中间件函数出现问题时给个提示
    message.error(action.value);
    return state
  } else if (action.type === XHR_WARNING_NOTIFY) { // 后端返回请求有问题时给个提示
    message.warning(action.value);
    return state
  } else if (action.type === SET_NAV_SELECTED_ITEM_KEY) {
    // console.log('收到来自组件的action', action)
    return {
      ...state,
      navSelectedItemKey: action.value
    }
  } else if (action.type === GET_TEST_LIST) {
    console.log('收到来自中间件异步请求完以后的action', action)
    return {
      ...state,
      testList: action.value
    }
  }
  return state
}