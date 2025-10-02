import express from "express";
import { config } from "dotenv";
import cors from "cors";
import { sendEmail } from "./utils/sendEmail.js";
import mongodbCon from "./config/mongodbCon.js";
import { Message } from "./model/messageSchema.js";
const app = express();


config({ path: "./config.env" });

app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST"],
    credentials: true,
  })
);

// mogodb connection 
mongodbCon();
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.post("/send/mail", async (req, res, next) => { 

  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return(
      res.status(400).json({
        success: false,
        message: "Please provide all details",
      })
    );
  }
  try {
    await sendEmail(name,email);
    await Message.create({ name, email, message });
    res.status(200).json({
      success: true,
      message: "Message Sent Successfully.",
    });
  } catch (error) {
    console.log("send mail errors :",error);
    res.status(500).json({
      success: false,
      message: " Internal Server Error",
    });
  }
});

// app.use(router);

app.listen(process.env.PORT, () => {
  console.log(`Server listening at port ${process.env.PORT}`);
});