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
    res.json("You're Trying to add a book");
  } catch (error) {}
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
