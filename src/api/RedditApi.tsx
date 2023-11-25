export function subredditAbout(subreddit: string) {
  fetch(`https://reddit.com/r/${subreddit}/about`)
    .then((response) => console.log(response))
    .catch((err) => {
      throw new Error(err);
    });
}
