const net = require("net");

const connect = function() {
  const conn = net.createConnection({
    host: "172.28.95.148",
    port: "50541"
  });

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: ZZZ");
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