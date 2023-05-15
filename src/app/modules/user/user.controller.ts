import { NextFunction, Request, Response } from "express";
import { getAdminUsersFromDb, getUserFromDb, getUsersFromDb, saveUserInDb } from "./user.service";

export const getUsers = async (req: Request, res: Response, next: NextFunction) => {
  const users = await getUsersFromDb();
  res.status(200).json({ status: 200, data: users });
};

export const getUser = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const user = await getUserFromDb(id);

  res.status(200).json({ status: 200, data: user });
};

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
  const userData = req.body;
  const user = await saveUserInDb(userData);
  res.status(200).json({ status: 200, data: user });
};

export const getAdminUsers = async (req: Request, res: Response, next: NextFunction) => {
  const admins = await getAdminUsersFromDb();

  res.status(200).json({ status: 200, data: admins });
};
