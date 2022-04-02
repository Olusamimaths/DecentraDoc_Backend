const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    allowedHeaders: "*",
    credentials: true,
  },
});
const port = process.env.PORT || 3000;

io.on("connection", (socket) => {
  socket.on("document change", (msg) => {
    io.emit("document change", msg);
  });
});

http.listen(port, () => {
  console.log(`Socket.IO server running on PORT: ${port}`);
});
