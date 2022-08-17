const { imageListClasses } = require("@mui/material");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    user_id: String,
    name: { type: String, required: true },
    email: {
      type: String,
      unique: true,
      trim: true,
      lowercase: true,
      required: true,
    },
    password: {
      type: String,
      trim: true,
      minLength: 3,
      requred: true,
    },
    interests: { type: Array, required: true },
    travelCollection: {
      Object,
    },
    countriesVisited: {
      Object,
    },
    followers: Object,
    following: Object,
    contactInfo: String,
    Inspo_tags: Object,
    board: { type: Schema.Types.ObjectId, ref: "Board" },
  },
  {
    timestamps: true,
    toJSON: {
      transform: function (doc, ret) {
        delete ret.password;
        return ret;
      },
    },
  }
);

module.exports = mongoose.model("User", userSchema);

//>>>>>>> cad01bc12a587687d63b420f8f8a6f536c6ecec6

// //
// timestamps: true,
// toJSON: {
//   transform: function (doc, ret) {
//     delete ret.password;
//     return ret;
//   },
// },
// }
// );

//module.exports = mongoose.model("User", userSchema);

// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const userSchema = new Schema(
//   {
//     user_id: String,
//     name: { type: String, required: true },
//     email: {
//       type: String,
//       unique: true,
//       trim: true,
//       lowercase: true,
//       required: true,
//     },
//     password: {
//       type: String,
//       trim: true,
//       minLength: 3,
//       requred: true,
//     },
//     travelCollection: {
//       Object,
//     },
//     countriesVisited: {
//       Object,
//     },
//     followers: Object,
//     following: Object,
//     contactInfo: String,
//     profile_img: Image,
//     Inspo_tags: Object,
//     posts: { type: Schema.Types.ObjectId, ref: "Post}" },
//     board: { type: Schema.Types.ObjectId, ref: "Board" },
//   },
//   {
//     timestamps: true,
//   }
// );

// module.exports = mongoose.model("User", userSchema);
