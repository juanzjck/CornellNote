const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NoteSchema = new Schema(
  {
    title: {
        type: String
    },
    description: {
        type: String
    },
    keyword: {
        type: String
    },
    summary: {
        type: String
    },
    is_public: {
        type: Boolean,
        default:false
    },
    user: {
        type: Schema.Types.ObjectId,
    },
  },
  { timestamps: true }
);


module.exports = mongoose.model("Note", NoteSchema );
