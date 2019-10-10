import React, { useState, useEffect } from "react"

import { getData, Post } from "services/data_service"

import Header from "components/ui/header"

interface PostParams {
  post: Post
}

const PostUI = ({ post }: PostParams): JSX.Element => {
  return (
    <div style={{ border: "1px solid #light-gray" }}>
      <h3>{post.title}</h3>
      <h6>By Author #{post.authorID}</h6>
      <p>{post.body}</p>
    </div>
  )
}

const App = (): JSX.Element => {
  let [post, setPost] = useState<Post | null>(null)

  useEffect(() => {
    getData()
      .then(setPost)
      .catch(console.error)
  }, [setPost])

  return (
    <div>
      <Header title="Frontend Application" />
      {post ? <PostUI post={post} /> : null}
    </div>
  )
}

export default App
