import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title: String,
  note: String,
  date: {
    type: Date,
    default: new Date(),
  },
  importance: String,
});

const PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;
