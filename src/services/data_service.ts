import { fetch } from 'utilities/api'

export interface IPost {
  id: number
  title: string
  body: string
  authorID: number
}

interface IPostResponse {
  userId: number | null
  body: string | null
  id: number | null
  title: string | null
}

export const getData = async (): Promise<IPost> => {
  const { body } = await fetch<IPostResponse>(
    'https://jsonplaceholder.typicode.com/posts/1'
  )

  return Promise.resolve({
    authorID: body?.userId || 0,
    body: body?.body || '',
    id: body?.id || 0,
    title: body?.title || '',
  })
}
