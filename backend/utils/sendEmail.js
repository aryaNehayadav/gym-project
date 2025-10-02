import nodeMailer from "nodemailer";

export const sendEmail = async (name, email) => {
  console.log("send data tobackend :",name,email);
  const transporter = nodeMailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

 const mailOptions = {
   from: `"EDGE FITNESS" <${process.env.EMAIL_USER}>`,
   to: email,
   subject: "JOIN GYM MEMBERSHIP",
   html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f9f9f9;">
          <h2 style="color: #d9534f;">Booking membership</h2>
          <p>Hi <b>${name}</b>,</p>
          <p>Your membership has been successfully <b>register</b>.</p>
          <p>We are excited to have you as a part of our fitness community. If you have any questions or need assistance, feel free to reach out to us.</p>
          <p>Stay fit and healthy!</p>
          <p>Best regards,</p>
          <p><b>EDGE FITNESS Team</b></p>
        </div>
      `,
 };
 await transporter.sendMail(mailOptions);
};