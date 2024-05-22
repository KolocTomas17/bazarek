const db = require("../helpers/db");

exports.getAllItems = (req, res) => {
  db.query("SELECT * FROM items;", (err, result, fields) => {
    if (err) return console.log(err);
    res.status(200).send({
      msg: "Items found",
      result,
    });
  });
};

exports.getItemById = (req, res) => {
  db.query(
    "SELECT * FROM items WHERE id = ?;",
    [req.params.id],
    (err, result, fields) => {
      if (err) return console.log(err);
      res.status(200).send({
        msg: "Item found",
        result,
      });
    }
  );
};

exports.postItem = (req, res) => {
  db.query(
    "INSERT INTO items (name, price, image) VALUES (?, ?, ?);",
    [req.body.name, req.body.price, req.body.image],
    (err, result, fields) => {
      if (err) return console.log(err);
      res.status(200).send({
        msg: "Item created",
        result,
      });
    }
  );
};

exports.putItem = (req, res) => {
  db.query(
    "UPDATE items SET name = ?, price = ?, image = ? WHERE id = ?;",
    [req.body.name, req.body.price, req.body.image, req.params.id],
    (err, result, fields) => {
      if (err) return console.log(err);
      res.status(200).send({
        msg: "Item updated",
        result,
      });
    }
  );
};

exports.deleteItem = (req, res) => {
  db.query(
    "DELETE FROM items WHERE id = ?;",
    [req.params.id],
    (err, result, fields) => {
      if (err) return console.log(err);
      res.status(200).send({
        msg: "Item deleted",
        result,
      });
    }
  );
};
