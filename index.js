const { breedFetcher } = require("./breedFetcher");

const inputBreed = process.argv[2];

breedFetcher(inputBreed, (error, description) => {
  if (error) {
    console.log(error);
  } else {
    console.log(description);
  }
});