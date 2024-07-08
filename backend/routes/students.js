import { Router } from "express";
const router = Router();
import {
  getStudents,
  getStudent,
  createStudent,
  updateStudent,
  deleteStudent,
  checkRollNoExistance,
} from "../controllers/studentController.js";

router.get("/", getStudents);

router.get("/:id", getStudent);

router.get("/exists/:rollNo", checkRollNoExistance);

router.post("/", createStudent);

router.put("/:id", updateStudent);

router.delete("/:id", deleteStudent);

export default router;
