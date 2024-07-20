const express = require("express");
const router = express.Router();

const MenuItem = require("./../models/MenuItem.js");

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newMenuItem = new MenuItem(data);

    const response = await newMenuItem.save();
    console.log("Data saved");
    res.status(200).json(response);
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: "internal server error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const getData = await MenuItem.find();
    console.log("Data fetched");
    res.status(200).json(getData);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "internal server error" });
  }
});

router.get("/:taste", async (req, res) => {
  try {
    const taste = req.params.taste;
    if (taste === "sweet" || taste === "sour" || taste === "spicy") {
      const getData = await MenuItem.find({ taste: taste });
      console.log("Data fetched");
      res.status(200).json(getData);
    } else {
      console.error(err);
      res.statusMessage(500).json({ error: "Enter valid taste" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "internal server error" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const personId = req.params.id;
    const updatedData = req.body;

    const response = await MenuItem.findByIdAndUpdate(personId, updatedData, {
      new: true,
      runValidators: true,
    });

    if (!response) {
      console.error("No data found");
      return res.status(404).json({ error: "No data found" });
    }

    console.log("Data updated");
    res.status(200).json({ message: "Data updated" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "internal server error" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const personId = req.params.id;

    const response = await MenuItem.findByIdAndDelete(personId);
    if (!response) {
      console.error("No data found");
      return res.status(404).json({ error: "No data found" });
    }
    console.log("Data deleted");
    res.status(200).json({ message: "Data deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "internal server error" });
  }
});

module.exports = router;
