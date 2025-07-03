// models/Ticket.js
import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const ticketSchema = new Schema({
  ticketNo: String,
  date: String,
  name: String,
  department: String,
  subject: String,
  category: String,
  type: String,
  priority: { type: String, enum: ['Low', 'Medium', 'High'] },
  description: String,
  status: { type: String, default: 'open' },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // ✅ Add this
});

export default model('Ticket', ticketSchema);
