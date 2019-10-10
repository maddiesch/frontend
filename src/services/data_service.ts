import { fetch } from "utilities/api"

export interface Post {
  id: number
  title: string
  body: string
  authorID: number
}

export const getData = async (): Promise<Post> => {
  let { body } = await fetch("https://jsonplaceholder.typicode.com/posts/1")

  return Promise.resolve({
    id: body.id || 0,
    title: body.title || "",
    body: body.body || "",
    authorID: body.userId || 0
  })
}
