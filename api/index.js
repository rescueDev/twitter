const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");
const User = require("./models/user");
const Tweet = require("./models/tweet");
const cors = require("cors");
var session = require("express-session");

const whitelist = ["http://localhost:3000"];
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};
app.use(cors(corsOptions));

//Routes
const userRoutes = require("./routes/user");
const tweetRoutes = require("./routes/tweet");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(
  "/static",
  express.static(path.join(__dirname, "../client/build//static"))
);

app.get("/", (req, res, next) => {
  res.send("Heello this is Index, please use Postman to test this REST_API !!");
});

app.use(
  session({
    secret: "mysecret",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(userRoutes);
app.use(tweetRoutes);

//relationships
User.hasMany(Tweet, { foreignKey: "user_id" });
Tweet.belongsTo(User, { foreignKey: "user_id" });

Tweet.sequelize.sync();
User.sequelize.sync();
app.get("*", function (req, res) {
  res.sendFile("index.html", {
    root: path.join(__dirname, "../../client/build/"),
  });
});
app.listen(3001, () => {
  console.log(`Server listening on `);
});
