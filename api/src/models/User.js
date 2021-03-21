const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

const date = new Date();
const UserSchema = new Schema(
  {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    nick_name: {
      type: String,
    },
    ocupation: {
        type: String,
        enum: ['Student','Teacher','Profesional','Coder','Other'],
        default: "Other",
    },
    birthDate: {
      type: String,
    },
    gender: {
      type: String,
      enum: ['M','F','NO BINARIO'],
      default: "NO BINARIO",
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    type_user: {
      type: String,
      enum: ["ADMIN", "STUDENT"],
      default:"STUDENT"
    },
    is_active: {
      type: Boolean,
      default: true,
    },
    contract_acepted: {
      type: Boolean,
      default: false,
    },
    country: {
      type: String,
      default:'NONE'
    },
  },
  { timestamps: true }
);

UserSchema.pre("save", function (next) {
  const user = this;
  const SALT_FACTOR = 13;
  if (!user.isModified("password")) {
    return next();
  }
  bcrypt.genSalt(SALT_FACTOR, function (err, salt) {
    if (err) return next(err);
    bcrypt.hash(user.password, salt, function (error, hash) {
      if (error) return next(error);
      user.password = hash;
      next();
    });
  });
});

module.exports = mongoose.model("User", UserSchema);
