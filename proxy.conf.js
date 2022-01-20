const PROXY_CONFIG = [
  {
    context: "/api",
    /*
    localhost
     */
    target: "http://localhost:8080",

    /*
    docker
     */
    // target: "http://patient-server:8080",
    secure: false
  },
  // {
  //   context: "/ws",
  //   target: "ws://localhost:8080",
  //   secure: false,
  //   ws: true
  // }

];
module.exports = PROXY_CONFIG;
