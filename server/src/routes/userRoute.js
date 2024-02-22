import express from "express";
import { addUser, deleteUser, getAllUsers, updateUser } from "../controller/userController.js";
const router = express.Router();
router.get("/users", getAllUsers);
router.put("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);
router.post("/users", addUser);
export default router;
