// routes/ticketRoutes.js
import express from 'express';
import multer from 'multer';
import { dashboard, myTickets, createTicket } from '../controllers/ticketController.js';
import auth from '../middleware/authMiddleware.js';

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.get('/dashboard', auth(), dashboard);
router.get('/my-ticket', auth(), myTickets);
router.post('/new-ticket', auth(), upload.single('attachment'), createTicket);

export default router;