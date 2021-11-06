import mongoose from 'mongoose';

const blogSchema = mongoose.Schema({
  title: String,
  category: String,
  image: String,
  body: String,
  date: { type: Date, default: Date.now },
});

export default mongoose.model('Blog', blogSchema);
