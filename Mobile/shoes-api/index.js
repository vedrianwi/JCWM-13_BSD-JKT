// import module
const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");

// initialize express and env
const app = express();
dotenv.config();

// create url debuger
const urlLogger = (req, res, next) => {
	console.log(req.method + " : " + req.url);
	next();
};

// apply middleware
app.use(cors());
app.use(bodyparser.json());
app.use(express.static("./public"));
app.use(urlLogger);

// connect database
const db = require("./database");
db._db.connect(err => {
	if (err) {
		console.log("error connecting : " + err);
		return;
	}

	console.log(`database is connected at id : ${db._db.threadId}`);
});

// home route
app.get("/", (req, res) => res.status(200).send("<h1>Shoes APIs</h1>"));

// apply router
const { produk_r, user_r, order_r, transaction_r } = require("./routers");
app.use("/api/produk", produk_r);
app.use("/api/user", user_r);
app.use("/api/order", order_r);
app.use("/api/transaction", transaction_r);

// bind to localhost
const PORT = process.env.PORT || 2000;
app.listen(PORT, () => console.log(`server is running at port : ${PORT}`));
