import { UserModel } from "@/interfaces";
import mongoose, { Schema, models } from "mongoose";

const userSchema: Schema = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    userRank: {
      type: String,
      default:0,
    },
    userStats: {
      totalGamesPlayed: {
        type: Number,
        default: 0,
      },
      totalScore: {
        type: Number,
        default: 0,
      },
      totalAdditionPlayed: {
        type: Number,
        default: 0,
      },
      totalAdditionScore: {
        type: Number,
        default: 0,
      },
      totalSubtractionPlayed: {
        type: Number,
        default: 0,
      },
      totalSubtractionScore: {
        type: Number,
        default: 0,
      },
      totalMultiplicationPlayed: {
        type: Number,
        default: 0,
      },
      totalMultiplicationScore: {
        type: Number,
        default: 0,
      },
      totalDivisionPlayed: {
        type: Number,
        default: 0,
      },
      totalDivisionScore: {
        type: Number,
        default: 0,
      },
      totalOrderedPlayed: {
        type: Number,
        default: 0,
      },
      totalOrderedScore: {
        type: Number,
        default: 0,
      },
      highestAdditionScore: {
        type: Number,
        default: 0,
      },
      highestSubtractionScore: {
        type: Number,
        default: 0,
      },
      highestMultiplicationScore: {
        type: Number,
        default: 0,
      },
      highestDivisionScore: {
        type: Number,
        default: 0,
      },
      highestOrderedScore: {
        type: Number,
        default: 0,
      },
    },
  },

  { timestamps: true }
);

const User = models.User || mongoose.model<UserModel>("User", userSchema);
export default User
