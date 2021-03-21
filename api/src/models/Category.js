const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CategorySchema = new Schema(
  {
    title: {
        type: String
    },
    description: {
        type: String
    },
    is_public: {
        type: Boolean,
        default:false
    },
    notes: {
        type: [Schema.Types.ObjectId],
        ref:'Note',
    },
    user: {
        type: Schema.Types.ObjectId,
    },
  },
  { timestamps: true }
);


module.exports = mongoose.model("Category", CategorySchema );
