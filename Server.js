import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const router = express.Router();
app.use("/", router);

app.listen(5000, () => console.log("Server is running on port 5000"));

const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

contactEmail.verify((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Ready to send');
    }
});

router.post("/contact", (req, res) => {
    const { firstName, lastName, email, message, phone } = req.body;
    const name = `${firstName} ${lastName}`;
    const mail = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: "Contact Form Submission - Portfolio",
        html: `
            <p>Name: ${name}</p>
            <p>Email: ${email}</p>
            <p>Phone: ${phone}</p>
            <p>Message: ${message}</p>
        `,
    };

    contactEmail.sendMail(mail, (error) => {
        if (error) {
            console.error("Error sending email:", error);
            res.status(500).json({ message: "Internal Server Error" });
        } else {
            res.status(200).json({ message: "Message Sent" });
        }
    });
});
