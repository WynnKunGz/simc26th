import { model, Schema } from "mongoose";

const userTable = model(
  "user",
  new Schema({
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
      default: "applicant",
    },
  })
);

export default userTable;