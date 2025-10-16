import express from "express";
import { factController } from "../controller/fact.contoller.js";

const factroute = express.Router();

factroute.get("/me", factController);

export default factroute;
