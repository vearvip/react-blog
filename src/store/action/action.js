import { 
  SET_NAV_SELECTED_ITEM_KEY, 
  GET_TEST_LIST,
  XHR_ERROR_NOTIFY,
  XHR_WARNING_NOTIFY
} from "../type/type";
import {getHomeAllList} from '../../api/home'

// 设置被选中的那个item key
export const setNavSelectedItemKeyAction = value => {
  return {
    type: SET_NAV_SELECTED_ITEM_KEY,
    value
  }
}

export const getTestListAction = () => async (dispatch) => {  
  try {
    const ret = await getHomeAllList({name: 'tom'})
    console.log('ret',ret)
    if (ret.data.meta.status) {
      dispatch({
        type: GET_TEST_LIST,
        value: ret.data.data
      })
      return true
    } else {
      dispatch(xhrWarningNotify(ret.data.meta.info))
      return false
    }
  } catch (error) {
    dispatch(xhrErrorNotify(error.message))
    return false
  }
}

// axios的请求失败后的提示 action
export const xhrErrorNotify = value => {
  return {
    type: XHR_ERROR_NOTIFY,
    value
  }
}
// axios的请求后端返回警告后的提示 action
export const xhrWarningNotify = value => {
  return {
    type: XHR_WARNING_NOTIFY,
    value
  }
}