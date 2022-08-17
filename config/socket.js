let io;

module.exports = {
  init: (httpServer) => {
    io = require("socket.io")(httpServer, {
      cors: {
        cors: {
          origin: "*",
          methods: ["GET", "POST"],
        },
      },
    });
    return io;
  },
  getIO: () => {
    if (!io) {
      throw new Error("Scoket.io is not initialized");
    }
    return io;
  },
};
