import express from "express";
import { db } from "../utils/DbConfig.js";

// GET BOOKS //

const GetBooks = async (req, res) => {
  try {
    const q = "SELECT * FROM test.books";
    db.query(q, (error, result) => {
      if (error) {
        console.log(error);
      } else {
        res.json(result);
      }
    });
  } catch (error) {
    console.log(error);
  }
};

// ADD BOOKS //

const AddBooks = async (req, res) => {
  try {
    const q = "INSERT INTO books (`title`, `desc`, `cover`) VALUES (?, ?, ?)";

    const values = [req.body.title, req.body.desc, req.body.cover];

    db.query(q, values, (error, result) => {
      if (error) {
        console.log(error);
        res.status(500).json({ error: `Internal Server Error ${req}` });
      } else {
        res.status(201).json("Book Created Successfully");
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// UPDATE BOOKS //
const UpdateBooks = async (req, res) => {
  try {
    res.json("You dare alter the ancient texts");
  } catch (error) {}
};

// DELETE BOOKS //
const DeleteBooks = async (req, res) => {
  try {
    res.json("You've burned them all you fiend");
  } catch (error) {}
};

export { GetBooks, AddBooks, UpdateBooks, DeleteBooks };
