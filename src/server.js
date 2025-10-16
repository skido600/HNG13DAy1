import express from "express";
import { config } from "dotenv";
import { HandleError, notFound } from "./middleware/ErrorHandling.js";
import factroute from "./Routes/fact.route.js";
config();

const server = express();
const port = process.env.PORT;

//middleware
server.use(express.json());
server.use(factroute);

server.use(notFound);
server.use(HandleError);

server.listen(port, console.log(`server running on port ${port}`));
