import mongoose from "mongoose";
mongoose.connect(process.env.DATABASE);
export default mongoose.connection;
