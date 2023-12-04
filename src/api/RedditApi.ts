export function subredditInformationApi(subreddit: string) {
  return fetch(`http://localhost:7003/v1/actions?query=${subreddit}`)
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      throw new Error(err);
    });
}
