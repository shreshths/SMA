import { Schema, model } from "mongoose";

const studentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  rollNo: {
    type: Number,
    required: true,
    unique: true,
  },
  course: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

export default model("Student", studentSchema, "StudentRecords");
