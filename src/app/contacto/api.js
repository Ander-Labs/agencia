import { Pool } from "pg";
import nodemailer from "nodemailer";

export default function handler(req, res) {
  const { name, email, company, subject, message } = req.body;

  const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });

  pool.connect((err, client) => {
    if (err) {
      console.error("Error connecting to database", err);
      return res.status(500).json({ message: "Error connecting to database" });
    }

    const sql = `
      INSERT INTO contacts (name, email, company, subject, message)
      VALUES ($1, $2, $3, $4, $5)
    `;
    const values = [name, email, company, subject, message];

    client.query(sql, values, (err) => {
      if (err) {
        console.error("Error inserting contact", err);
        return res.status(500).json({ message: "Error inserting contact" });
      }

      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASSWORD,
        },
      });

      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: "New contact form submission",
        html: `
          <p>Name: ${name}</p>
          <p>Email: ${email}</p>
          <p>Company: ${company}</p>
          <p>Subject: ${subject}</p>
          <p>Message:</p>
          <p>${message}</p>
        `,
      };

      transporter.sendMail(mailOptions, (err) => {
        if (err) {
          console.error("Error sending email", err);
          return res.status(500).json({ message: "Error sending email" });
        }

        client.release();
        return res.status(200).json({ message: "Contact form submitted" });
      });
    });
  });
}
