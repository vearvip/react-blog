import axios from 'axios'

const xhrUrl = 'http://yapi.demo.qunar.com/mock/46038'

const xhr = axios.create({
  baseURL: xhrUrl,
  timeout: 5000
})


export default xhr