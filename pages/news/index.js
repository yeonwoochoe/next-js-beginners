import Link from "next/link";
import { Fragment } from "react";

//domain/news/news
function NewsPage() {
  return (
    <Fragment>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="/news/nextjs-js-a-great-framework">
            NextJS Is a Great Framework
          </Link>
        </li>
        <li></li>
      </ul>
    </Fragment>
  );
}

export default NewsPage;
