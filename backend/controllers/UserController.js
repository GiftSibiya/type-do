import express from "express";
import { db } from "../utils/DbConfig.js";

// GET BOOKS //

const GetUser = async (req, res) => {
  try {
    const q = "SELECT * FROM test.user";
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

const AddUser = async (req, res) => {
  try {
    res.json("You're Trying to add a book");
  } catch (error) {}
};
const UpdateUser = async (req, res) => {
  try {
    res.json("You dare alter the ancient texts");
  } catch (error) {}
};
const DeleteUser = async (req, res) => {
  try {
    res.json("You've burned them all you fiend");
  } catch (error) {}
};

export { GetUser, AddUser, UpdateUser, DeleteUser };
