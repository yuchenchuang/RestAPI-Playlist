const express = require("express");
const router = express.Router();

// get a list of travel options from the db
router.get("/travel", function (req, res) {
  res.send({ type: "GET" });
});
// Add a new travel option to the db
router.post("/travel", function (req, res) {
  res.send({ type: "POST" });
});
// Update travel option in the db
router.put("/travel/:id", function (req, res) {
  res.send({ type: "PUT" });
});
// delete travel option in the db
router.delete("/travel/:id", function (req, res) {
  res.send({ type: "DELETE" });
});

module.exports = router;
