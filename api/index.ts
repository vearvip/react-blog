import xhr from './xhr'

export const findArticleById = (params: {
  id: number
}) => xhr({
  url: 'admin/article/findArticleById',
  method: 'get',
  params
})