const express = require("express");
const path = require("path");
const app = express();
const session = require("express-session");
const exphbs = require("express-handlebars");
const helpers = require("./utils/helpers");
const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const hbs = exphbs.create({ helpers });

const PORT = process.env.PORT || 3001;

const sess = {
  secret: "Super secret secret",
  name: "sess_name",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

// Inform Express.js on which template engine to use
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

require("./routes/index")(app);

sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () =>
    console.log("-------------- Now listening --------------")
  );
});
