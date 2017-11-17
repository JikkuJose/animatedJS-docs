import React from "react"
import ReactMarkdown from "react-markdown"

function Markdown({ children, light }) {
  return (
    <ReactMarkdown
      className={`sans-serif lh-copy ${light ? "black-60" : "black"}`}
      source={children}
    />
  )
}

export default Markdown
