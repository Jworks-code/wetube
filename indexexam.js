"use strict";

import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

const app = express();

const PORT = 4000;

const handleListening = () =>
  console.log(`Listening on: http://localhost:${PORT}`);

const handleHome = (req, res) => res.send("Wellcom Home");
const handleAboutUs = (req, res) => res.send("About Us");
const handleContact = (req, res) => res.send("Contact");
const handleProtected = (req, res) => res.send("Protected");

// const home = () => app.get("/", handleHome);

const consoleMid = (req, res, next) => {
  console.log("Im a middleware");
  next();
};
const protectedMid = (req, res) => {
  console.log("This page is protected");
  res.redirect("/");
};

app.use(consoleMid);

app.get("/", handleHome);

app.get("/about-us", handleAboutUs);

app.get("/contact", handleContact);

app.get("/protected", protectedMid, handleProtected);

app.listen(PORT, handleListening);
