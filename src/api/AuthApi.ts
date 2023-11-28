export function getMeApi(idToken: string) {
  return fetch(`http://localhost:8000/v1/users/me`, {
    method: "GET",
    headers: new Headers({
      Authorization: "Bearer " + idToken,
      "Content-Type": "application/json",
    }),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      throw new Error(err);
    });
}
