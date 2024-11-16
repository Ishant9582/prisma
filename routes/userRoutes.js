import { Router } from "express";
import { createUser , updateUser ,userdata , showUser , deleteUser } from "../controller/UserController.js";
const router = Router() ;
router.get("/", userdata) ;
router.post("/", createUser) ;
router.get("/:id", showUser) ;
router.put("/:id", updateUser) ;
router.delete("/:id",deleteUser) ;
export default router ;
