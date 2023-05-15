import { Model, Schema, model } from "mongoose";
import { IUser, IUserMethod, UserModel } from "./user.interface";

// type userModel = Model<IUser, {}, IUserMethod>;

const userSchema = new Schema<IUser, UserModel, IUserMethod>({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  role: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    firstName: { type: String, required: true },
    middleName: String,
    lastName: { type: String, required: true },
  },
  dateOfBirth: String,
  gender: { type: String, enum: ["male", "female"] },
  email: String,
  contactNo: {
    type: String,
    required: true,
  },
  emergencyContactNo: {
    type: String,
    required: true,
  },
  presentAddress: {
    type: String,
    required: true,
  },
  permanentAddress: {
    type: String,
    required: true,
  },
});

// statics
userSchema.static("getAdminUsers", async function getAdminUsers() {
  return await this.find({ role: "admin" });
});

userSchema.method("fullName", function fullName() {
  return this.name.firstName + " " + this.name.lastName;
});

//   create model
export const User = model<IUser, UserModel>("User", userSchema);
