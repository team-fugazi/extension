export function getMeApi(idToken: string) {
  console.log("ID TOKEN");
  console.log(idToken);
  console.log("ID TOKEN");
  return fetch(`http://localhost:7002/v1/users/me`, {
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
