import React from "react"

interface Props {
  title: string
}

const Component = ({ title }: Props): JSX.Element => {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  )
}

export default Component
