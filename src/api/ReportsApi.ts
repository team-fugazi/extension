export function getUserStatsApi(userId: string) {
  fetch(`http://localhost:7001/v1/reports/${userId}/stats`, {})
    .then((response) => {
      console.log("_____________RESPONSE");
      console.log(response);
      console.log("_____________RESPONSE");
    })
    .catch((err) => {
      throw new Error(err);
    });
}
