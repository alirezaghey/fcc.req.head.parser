const express = require("express");
const dns = require("dns");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/api/whoami", (req, res) => {
  const host = req.headers["host"];
  const lang = req.headers["accept-language"];
  const soft = req.headers["user-agent"];
  dns.lookup(host, (err, address) => {
    res.json({
      ipaddress: address,
      language: lang,
      software: soft,
    });
  });
});

app.listen(2000);
