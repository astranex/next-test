import Link from "next/link";
import MainLayout from "../components/layout";
import classes from '../styles/error.module.scss'

export default function ErrorPage() {
  return (
    <MainLayout>
      <h1 className={classes.error}>Error 404</h1> {/* classes.error, где error - класс css (селектор) */}
      <p>
        Please <Link href="/">go back</Link> to safety
      </p>
    </MainLayout>
  );
}
