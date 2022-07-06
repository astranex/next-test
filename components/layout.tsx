import Link from "next/link";
import Head from "next/head";

export default function MainLayout({ children, title = "Next App" }) {
  return (
    <>
      <Head>
        <title>{title} | Next Course</title>
        <meta name="keywords" content="next,javascript,nextjs,react" />
        <meta name="description" content="next" />
        <meta charSet="utf-8" />
      </Head>
      <nav>
        <Link href="/">
          <a>Главная</a>
        </Link>
        <Link href="/about">
          <a>Компания</a>
        </Link>
        <Link href="/posts">
          <a>Посты</a>
        </Link>
      </nav>
      <main>{children}</main>
      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        main {
          width: 1280px;
          margin: 0 auto;
        }
        nav {
          margin: 0;
          padding: 0;
          background: #eee;
          height: 50px;
          width: 100%;
          display: flex;
          justify-content: center;
        }
        a {
          font-size: 16px;
          font-weight: 500;
          margin-top: 15px;
          margin-left: 15px;
          margin-right: 15px;
          color: red;
          text-decoration: none;
        }
      `}</style>
    </>
  );
}
