function getMyContributionApi() {
  fetch("http://localhost:3000/", {})
    .then((response) => console.log(response))
    .catch((err) => {
      throw new Error(err);
    });
}

function getPostedIndexApi() {}
