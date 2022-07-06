import { useState, useEffect } from "react";
import Router, { useRouter } from "next/router";
import MainLayout from "../../components/layout";
import { NextPageContext } from "next";
import { PostType } from "../../interfaces/Posts";

export default function Post({ post: serverPost }) {
  const [post, setPost] = useState(serverPost)
  const router = useRouter();

  useEffect(() => {
    async function load() {
      const response = await fetch(
        `http://localhost:4200/posts/${router.query.id}`
      );
      const data = await response.json();
      setPost(data)
    }

    if (!serverPost) {
      load();
    }
  }, [])

  if (!post) {
    return <MainLayout>
      <p>Загрузка...</p>
    </MainLayout>
  }
  //   const router = useRouter(); // Вместо роутера можно использовать контекст для отловки id
  //   console.log(router);

  // Post.getInitialProps = async (ctx) => {
  //   const response = await fetch(
  //     `http://localhost:4200/posts/${router.query.id}`
  //   );
  //   const post = await response.json();
  //   return {
  //     post,
  //   };
  // };

  return (
    <MainLayout>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <button onClick={() => Router.push("/")}>Вернуться на главную</button>
      <button onClick={() => Router.push("/posts")}>Вернуться к постам</button>
    </MainLayout>
  );
}

Post.getInitialProps = async ({ query, req }: NextPageContext) => {
  // ctx
  if (!req) {
    return { post: null };
  }

    const response = await fetch(
    `${process.env.API_URL}/posts/${query.id}`
    );
    const post: PostType = await response.json();

  return {
    post,
  };
};
