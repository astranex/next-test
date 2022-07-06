import Link from "next/link";
import Head from "next/head";
import MainLayout from "../components/layout";

export default function Index() {
  return (
    <MainLayout title={"Главная"}>
      {/* Структукра пустого тега называется <React.Fragment> – создаёт пустую ноду (узел) */}
      <h1>Привет, Некст!</h1>
      <p>
        <Link href="/about">О нас</Link>
        {/* Можно обернуть ссылку в компонент Link, а можно использоват сам Link в виде ссылки*/}
      </p>
      <p>
        <Link href="/posts">
          <a>Посты</a>
        </Link>
      </p>
      <p>Какой-то текст</p>
    </MainLayout>
  );
}
