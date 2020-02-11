import axios from 'axios'

const xhrUrl = 'http://localhost:3001/'

const xhr = axios.create({
  baseURL: xhrUrl,
  timeout: 5900
})


export default xhr