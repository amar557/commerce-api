import mongoose from "mongoose";

const itemSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    colors: [
      {
        color: {
          type: String,
        },
        price: String,
      },
    ],
    image: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Item = mongoose.model("Item", itemSchema);

export default Item;
