import { Router } from "express";
const router = Router();
import { createTask } from '../controllers/task.controller'

router.post('/', createTask);

export default router;