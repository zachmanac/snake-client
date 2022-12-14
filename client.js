const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: ZZZ");
    // conn.write("Move: up");
    // setTimeout(() => {
    //   conn.write("Move: left");
    // }, 1000);
    // code that does something when the connection is first established
  });
  
  conn.on("data", (data) => {
    console.log("Server says ", data);
    // code that does something
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = {
  connect
};