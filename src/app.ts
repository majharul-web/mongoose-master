import express, { Application, Request, Response, NextFunction } from "express";
import cors from "cors";
// Application Routes
import userRoutes from "./app/modules/user/user.route";

const app: Application = express();

/*
 ****use middleware
 */

// cors
app.use(cors());

// parse data

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// respond with "hello world" when a GET request is made to the homepage
app.use("/api/v1/user", userRoutes);

export default app;
