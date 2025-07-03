// controllers/ticketController.js
import Ticket from '../models/Ticket.js';

export const dashboard = (req, res) => {
  res.json({ msg: 'Welcome to Dashboard!' });
};

export const myTickets = async (req, res) => {
  const tickets = await Ticket.find({ userId: req.user.id });
  res.json(tickets);
};

// controllers/ticketController.js
export const createTicket = async (req, res) => {
  try {
    console.log("🔹 req.body:", req.body);
    console.log("🔹 req.file:", req.file); // this will contain the attachment if any

    const ticket = await Ticket.create({
      ...req.body,
      userId: req.user.id, // include user
      // If saving attachment info, add something like:
      // attachmentName: req.file?.originalname,
      // attachmentBuffer: req.file?.buffer,
    });

    res.status(201).json(ticket);
  } catch (err) {
    console.error("❌ Ticket creation error:", err.message);
    res.status(400).json({ msg: err.message });
  }
};
