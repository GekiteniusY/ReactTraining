/**
 * Hacker Newsの人気・最新の記事500件の記事IDを取得する
 */
export async function getTopStories() {
  return fetch("https://hacker-news.firebaseio.com/v0/topstories.json", {
    next: { revalidate: 60 },
  }).then((res) => res.json());
}

/**
 * 記事のデータを取得する
 * @param {string} id
 */
export async function getItem(id) {
  return fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(
    (res) => res.json()
  );
}
