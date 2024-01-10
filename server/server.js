const express = require("express");
const { MongoClient } = require("mongodb");
const http = require("http");
const app = express();
const cors = require("cors"); // allows for cors, typically disabled in browser
app.use(cors(), express.json());
const { Server } = require("socket.io");

const port = 3001;
server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server running at ${port}`);
});

const io = new Server(server, {
  cors: {
    origin: ["http://localhost:3000", "http://localhost:3002"],
  },
});

class CRUD {
  constructor(team = "General") {
    this.team = team;
  }
  collection = () => {
    console.log(this.team);
    return client.db("Teams").collection(this.team);
  };

  create = async (message, user) => {
    // creates message document
    await this.collection().insertOne({
      message: message,
      user: user,
      date: new Date(),
    });
    let res = await this.update();
    return res;
  };

  delete = async (message) => {
    // deletes message document
    await this.collection().deleteOne({ message: message });
  };

  update = async () => {
    let messageList = await this.collection()
      .find()
      .sort({ date: -1 })
      .limit(30);
    let res = await messageList.toArray();
    res.reverse();
    return res;
  };
}

// Mongo Password # 26Ts1fadyJRPkXli
const uri =
  "mongodb+srv://Max:26Ts1fadyJRPkXli@generaldb.j1ejeoc.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);

const crudInst = new CRUD();

io.on("connection", async (socket) => {
  console.log(`User Connected: ${socket.id}`);
  socket.on("send-message", async (data) => {
    let listData = await crudInst.update();
    socket.broadcast.emit("recevied-message", listData);
  });
});
async function runMongo() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();
    // Establish and verify connection
    await client.db("admin").command({ ping: 1 });

    console.log("Connected successfully to server");
  } catch (error) {
    console.log(error);
  }
}

runMongo().catch(console.dir); // starts the mongo client

let db = [];

app.post("/sendMessage", (req, res) => {
  db.push(req.body.message);
  if (db.length > 30) {
    for (let i = 1; i <= db.length - 1; i++) {
      db[i - 1] = db[i];
    }
    db.pop();
  }
  classInstance = new CRUD(req.body.team);
  classInstance.create(req.body.message, req.body.user).then((data) => {
    res.send(data);
  });
});

app.post("/getMessage", (req, res) => {
  classInstance = new CRUD(req.body.team);
  classInstance.update().then((data) => res.send(data));
});
