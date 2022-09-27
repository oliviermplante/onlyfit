import mongoose from "mongoose";

const RoleSchema = new mongoose.Schema(
  {
    userId: {
      type: int,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Role", RoleSchema);