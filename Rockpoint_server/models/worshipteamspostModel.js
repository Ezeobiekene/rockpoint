import mongoose from "mongoose";

const Schema = mongoose.Schema;

const worship_teamspostSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const worshipteamspostModel = mongoose.model(
  "Worshipteampost",
  worship_teamspostSchema
);
