const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const searchRouter = express.Router();
const fetch1 = require("node-fetch");

app.get("/", (req, res) => {
  res.send("Next-React-Redux API");
});
app.use("/api", searchRouter);

app.listen(port, () => {
  console.log(`Running on ${port}`);
});

searchRouter.route("/search").get((req, res) => {
  const queryParms = parseQuery(req);
  fetch1(
    `https://itunes.apple.com/search?media=${queryParms.media}&offset=${queryParms.offset}&limit=${queryParms.limit}&term=${queryParms.term}`
  )
    .then((response) => response.json())
    .then((responseJson) => {
      res.json(responseJson);
    })
    .catch((error) => {
      console.log(error);
    });
});

function parseQuery(request) {
  return {
    media: request.query.media,
    offset: request.query.offset,
    limit: request.query.limit,
    term: request.query.term,
  };
}
