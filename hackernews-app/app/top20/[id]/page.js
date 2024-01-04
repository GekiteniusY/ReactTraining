import "../_style/article.css";
import { getItem } from "../../_utils/hackerNews";

export default async function Top20IdPage({ params }) {
  // paramsからURLのパラメータを取り出す
  const { id } = params;
  // 記事データを取得する
  const item = await getItem(id);

  return (
    <article>
      <h1>{item.title}</h1>
      <p>
        by {item.by} on {new Date(item.time * 1000).toLocaleDateString()}
      </p>
      <p>
        <a href={item.url}>{item.url}</a>
      </p>
    </article>
  );
}
