import { fetch } from "utilities/api"

export interface IPost {
  id: number
  title: string
  body: string
  authorID: number
}

export const getData = async (): Promise<IPost> => {
  const { body } = await fetch("https://jsonplaceholder.typicode.com/posts/1")

  return Promise.resolve({
    authorID: body.userId || 0,
    body: body.body || "",
    id: body.id || 0,
    title: body.title || ""
  })
}
