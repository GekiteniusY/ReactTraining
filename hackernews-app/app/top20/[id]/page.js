import "../_style/article.css";
import { getItem } from "../../_utils/hackerNews";
import Divider from "@mui/material/Divider";

export default async function Top20IdPage({ params }) {
  // paramsからURLのパラメータを取り出す
  const { id } = params;
  // 記事データを取得する
  const item = await getItem(id);

  // 記事データ内に含まれるコメントIDを１件ずつ取得する
  const kids = await Promise.all(
    item.kids.map((kidsItem) => getItem(kidsItem))
  );

  //   console.log(kids);

  return (
    <article>
      <h1>{item.title}</h1>
      <p>
        by {item.by} on {new Date(item.time * 1000).toLocaleDateString()}
      </p>
      <p>
        <a href={item.url}>{item.url}</a>
      </p>
      <hr />
      <h2>Comments</h2>
      {kids.map((kidsItem) => (
        <div key={kidsItem.id}>
          <h3>by: {kidsItem.by}</h3>
          <p>{kidsItem.text}</p>
          <p>{new Date(kidsItem.time * 1000).toLocaleString()}</p>
          <hr />
        </div>
      ))}
    </article>
  );
}
