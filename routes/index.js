
import { Router } from "express"
import useRoutes from "./userRoutes.js"; 

const router = Router();
router.use("/api/user", useRoutes);


export default router;
