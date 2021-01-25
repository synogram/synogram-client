require("dotenv").config();

module.exports = {
  server: {
    // The protocol, host and port are used to check when your application
    // is ready to accept requests. Your tests will start running as soon as
    // the port on that host and protocol are available.
    protocol: "http",
    host: "localhost",
    port: 3000,
    // When the port at that host and protocol does not respond within the
    // specified time, the tests will fail. Increase this time (in ms) in case
    // your application requires more time to boot.
    launchTimeout: 15000,
    debug: true,
  },
};
