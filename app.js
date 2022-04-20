const express = require("express");

const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  res.status(200).sendFile(`${__dirname}/index.html`);
});
app.post("/:data", (req, res) => {
  let inp = req.params.data.split("&");
  let inValid = false;
  for (let i = 0; i < inp.length; i++) {
    if (inp[i].trim() === "") inValid = true;
  }
  if (!inp[2].includes("@")) inValid = true;
  if (inp[3].length !== 6) inValid = true;
  if (+inp[4] > 100 || +inp[4] < 0) inValid = true;
  if (inValid) {
    res
      .status(200)
      .send({ message: "Invalid Data Submitted, Please Fill all Details." });
  } else res.status(200).send({ message: "Data Submitted Successfully" });
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
