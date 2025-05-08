// pages/api/send-email.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Konfigurasi transporter Nodemailer (sesuaikan dengan penyedia email Anda)
    const transporter = nodemailer.createTransport({
      service: 'Gmail', // Contoh: Gmail
      auth: {
        user: process.env.GMAIL_USER, // Alamat email pengirim (simpan di environment variables)
        pass: process.env.GMAIL_PASS, // Kata sandi email pengirim (simpan di environment variables)
      },
    });

    const mailOptions = {
      from: email, // Alamat email pengirim dari form
      to: process.env.YOUR_EMAIL, // Alamat email tujuan Anda (simpan di environment variables)
      subject: `Pesan dari ${name}`,
      text: `Nama: ${name}\nEmail: ${email}\nPesan:\n${message}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Failed to send email' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}