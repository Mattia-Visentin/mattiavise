const express = require("express");
const Product = require("./models/product")
const mongoose = require("mongoose");
const app = express();
const path = require('path');
const PORT = 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

const methodOverride = require('method-override');
app.use(methodOverride('_method'));

app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect("mongodb+srv://mattia:L6VNU6W36GKsiJNc@clusterjs.0zdntbf.mongodb.net/", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connesso al database'))
  .catch(err => console.error('Impossibile connettersi al database', err));

app.get('/', (req, res) => {
  res.render('homepage.ejs');
});

app.get("/products", async (req, res) => {
  const products = await Product.find({});
  res.render("products/index", { products });
});

app.get("/products/new", (req, res) => {
  res.render("products/new");
});

app.post("/products/new", async (req, res) => {
  const { name, price, description } = req.body;

  const product = new Product({
    name,
    price,
    description,
  });

  await product.save();

  res.redirect("/products");
});

app.get("/products/edit/:id", async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.render("products/edit", { product: product });
});

app.put("/products/:id", async (req, res) => {
  await Product.findByIdAndUpdate(req.params.id, req.body);
  res.redirect("/products");
});

app.delete("/products/:id", async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.redirect("/products");
});

app.listen(PORT, () => {
  console.log(`Server in esecuzione sulla porta ${PORT}`);
})