const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const routes = require("./routes");

require("./database");

const PORT = 8080;
const app = express();

app.use(morgan("combined"));
app.use(express.json());
app.use(cors());

app.use("/", routes);

app.listen(PORT, () => {
  console.log("[SERVE UP] Running...");
});
