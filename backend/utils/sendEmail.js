// utils/sendEmail.js
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail", // or use a custom SMTP config
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendResetEmail = async (email, link) => {
  await transporter.sendMail({
    from: `"Support" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "Password Reset Link",
    html: `<p>Click below to reset your password:</p>
           <a href="${link}">${link}</a>
           <p>This link expires in 15 minutes.</p>`,
  });
};
