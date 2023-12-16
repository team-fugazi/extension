export function getUserStatsApi(userId: string) {
  
  return fetch(`http://localhost:7001/v1/reports/${userId}/stats`, {})
    .then((response) => {
      return response.json()
    })
    .catch((err) => {
        throw new Error(err);
    });
}
