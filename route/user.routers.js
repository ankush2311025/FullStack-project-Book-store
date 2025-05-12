import expess from "express";
import { signup } from "../controller/user.controller.js";
import { login } from "../controller/user.controller.js";

const router = expess.Router();

router.post("/signup", signup);
router.post("/login", login);

export default router;