import express from "express";

export const userRouter = express.Router();

userRouter.get("/", (req, res) => res.send("User index"));
userRouter.get("/edit", (req, res) => res.send("User edit"));
userRouter.get("/password", (req, res) => res.send("User password"));

// M data
// V how does the data look
// C function that loos for the data
