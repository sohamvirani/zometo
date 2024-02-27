require("dotenv").config();
const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const { connectDB } = require("./db/dbconnect");
const routes = require("./routes");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const { userService, orderService, menuService } = require("./services");
const app = express();

const options = {
  origin: "*",
};
app.use(cors(options));

//body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//cookies
app.use(cookieParser());

//routes
app.use("/v1", routes);

// ejs
app.set("view engine", "ejs");



/* register */
app.get("/signup", (req, res) => {
  res.render("./signup.ejs");
});

/* login */
app.get("/login", (req, res) => {
  res.render("./login.ejs");
}); 

/* Add Menu */
app.get("/menu", (req, res) => {
  res.render("./menu.ejs");
});

/* Add restarunt */
app.get("/restarunt", (req, res) => {
  res.render("./restarunt.ejs");
});

/* Add payment */
app.get("/payment", (req, res) => {
  res.render("./payment.ejs");
});

/* Add order */
app.get("/order", (req, res) => {
  res.render("./order.ejs");
});


app.get('/',async (req,res)=>{

  let Menu = await menuService.getMenu() 

  res.render('./allmenu',{message:Menu})
})
//DB connect
connectDB();

//server
http.createServer(app).listen(process.env.PORT, () => {
  console.log("server started success on",process.env.PORT); 
});



AAAW2AQ1  