// import '../styles/globals.css' // Можно импортировать стили в компонент
import NextNProgress from "nextjs-progressbar";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNProgress
        color="#29D"
        startPosition="0.3"
        stopDelayMs="200"
        height="3"
      />
      <Component {...pageProps} />
      <style jsx global>{`
        * {
          font-family: "Montserrat", sans-serif;
          font-weight: 600;
        }
        body {
          margin: 0;
        }
      `}</style>
    </>
  );
}
