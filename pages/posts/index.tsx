import { useState, useEffect } from "react";
import Link from "next/link";
import MainLayout from "../../components/layout";

export default function Posts({ posts: serverPosts }) {
  const [posts, setPosts] = useState(serverPosts);
  useEffect(() => {
    async function load() {
      const response = await fetch("http://localhost:4200/posts");
      const json = await response.json();
      setPosts(json);
    }

    if (!serverPosts) {
      load();
    }
  }, []);

  if (!posts) {
    return (
      <MainLayout>
        <p>Загрузка...</p>
      </MainLayout>
    );
  }

  return (
    <MainLayout title={"Посты"}>
      <h1>Посты:</h1>
      <ul>
        {posts &&
          posts.map((post) => {
            return (
              <li id={post.id}>
                <h4>
                  <Link href={`/posts/${post.id}`}>{post.title}</Link>
                </h4>
                <p>{post.body}</p>
              </li>
            );
          })}
      </ul>
    </MainLayout>
  );
}

Posts.getInitialProps = async ({ req }) => {
  if (!req) {
    return { posts: null };
  }
  const response = await fetch("http://localhost:4200/posts");
  const posts = await response.json();
  return {
    posts,
  };
};
