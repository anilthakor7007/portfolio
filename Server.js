import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import { appendToSheet } from './googleSheets.js';

dotenv.config();

console.log('EMAIL_USER:', process.env.EMAIL_USER);
console.log('EMAIL_PASS:', process.env.EMAIL_PASS);

const app = express();
app.use(cors());
app.use(express.json());

const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

contactEmail.verify((error) => {
    if (error) {
        console.log('Error verifying email configuration:', error);
    } else {
        console.log('Ready to send');
    }
});

// app.post("/contact", (req, res) => {
//     const { firstName, lastName, email, message, phone } = req.body;
//     const name = `${firstName} ${lastName}`;
//     const mail = {
//         from: name,
//         to: process.env.EMAIL_USER,
//         subject: "Contact Form Submission - Portfolio",
//         html: `
//             <p>Name: ${name}</p>
//             <p>Email: ${email}</p>
//             <p>Phone: ${phone}</p>
//             <p>Message: ${message}</p>
//         `,
//     };

app.post("/contact", async (req, res) => {
    const { firstName, lastName, email, message, phone } = req.body;
    const name = `${firstName} ${lastName}`;
    const mail = {
        from: name,
        to: process.env.EMAIL_USER,
        subject: "Contact Form Submission - Portfolio",
        html: `
            <p>Name: ${name}</p>
            <p>Email: ${email}</p>
            <p>Phone: ${phone}</p>
            <p>Message: ${message}</p>
        `,
    };

    try {
        // Send email
        await contactEmail.sendMail(mail);
        // Save to Google Sheet
        await appendToSheet({ firstName, lastName, email, phone, message });
        res.status(200).json({ code: 200, status: "Message Sent & Logged" });
    } catch (error) {
        console.log('Error:', error);
        res.status(500).json({ error: "Internal Server Error" });
    }

    // contactEmail.sendMail(mail, (error) => {
    //     if (error) {
    //         console.log('Error sending email:', error);
    //         res.status(500).json({ error: "Internal Server Error" });
    //     } else {
    //         res.status(200).json({ code: 200, status: "Message Sent" });
    //     }
   // });

});

app.listen(5000, () => console.log("Server is running on port 5000"));
