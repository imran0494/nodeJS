const express = require("express");
const router = express.Router();
const person = require("../models/Person");

//commet added for testing purposes

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newPerson = new person(data);

    const response = await newPerson.save();
    console.log("Data saved");
    res.status(200).json(response);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: "internal server error" });
  }
});

router.get("/", async function (req, res) {
  try {
    const getData = await person.find();
    console.log("Data fetched");
    res.status(200).json(getData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "internal server error" });
  }
});

router.get("/:worktype", async (req, res) => {
  try {
    const worktype = req.params.worktype;
    if (
      worktype === "chef" ||
      worktype === "manager" ||
      worktype === "waiter"
    ) {
      const getData = await person.find({ work: worktype });
      console.log("Data fetched");
      res.status(200).json(getData);
    } else {
      res.status(400).json({ error: "Invalid work type" });
    }
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: "internal server error" });
  }
});

module.exports = router;
