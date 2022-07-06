import Router from "next/router";
import MainLayout from "../../components/layout";

export default function About({ title }) {
  const linkClickHandler = () => {
    Router.push("/");
  };

  return (
    <MainLayout title="О нас">
      <h1>{title}</h1>
      <button onClick={linkClickHandler}>Вернуться на главную</button>
      <button onClick={() => Router.push("/posts")}>Перейти к постам</button>
    </MainLayout>
  );
}

About.getInitialProps = async () => {
  const response = await fetch("http://localhost:4200/about");
  const data = await response.json();

  return {
    title: data.title,
  };
};

// если присутствует папка с таким же названием компонента и файлом index.js, будет выбрана она
