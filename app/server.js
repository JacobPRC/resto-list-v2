const app = require("./index");
const config = require("./config");

const bole = require("bole");

bole.output({ level: "debug", stream: process.stdout });
const log = bole("server");

log.info("server process starting");

app.listen(config.port, (err) => {
  if (err) {
    log.error("Unable to listen for connections", err);
    process.exit(10);
  }
  log.info("express is listening on http://" + config.port);
});
