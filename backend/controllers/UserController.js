import express from "express";

const GetBooks = async (req, res) => {
  try {
    res.json("Hey This is the backend");
  } catch (error) {}
};

export default GetBooks;
