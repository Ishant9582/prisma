import { Router } from "express";
import { createcomment , updatecomment , commentdata , showcomment , deletecomment } from "../controller/CommentController.js";
const router = Router() ;
router.get("/", commentdata) ;
router.post("/", createcomment) ;
router.get("/:id", showcomment) ;
router.put("/:id", updatecomment) ;
router.delete("/:id",deletecomment) ;
export default router ;