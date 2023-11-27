export function subredditInformationApi(subreddit: string) {
  return fetch(`http://localhost:8000/v1/actions?query=${subreddit}`)
    .then((response) => {
      console.log("RESPONSESSS");

      return response.json();
    })
    .catch((err) => {
      throw new Error(err);
    });
}
