import express from "express";
import { createUser, getAdminUsers, getUser, getUsers } from "./user.controller";

const router = express.Router();

router.get("/", getUsers).get("/admins", getAdminUsers).get("/:id", getUser).post("/create-user", createUser);

export default router;
