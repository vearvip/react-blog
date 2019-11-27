import xhr from '../utils/xhr/xhr'

export const getHomeAllList = (params) => xhr({
  url: 'all-list',
  method: 'get',
  params
})