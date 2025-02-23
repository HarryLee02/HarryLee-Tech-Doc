import React from "react";
import BlogPostItem from "@theme-original/BlogPostItem";
import Comments from "@site/src/components/Comments";

export default function BlogPostItemWrapper(props) {
  return (
    <>
      <BlogPostItem {...props} />
      <Comments />
    </>
  );
}