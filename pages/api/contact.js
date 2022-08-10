// const sgMail = require("@sendgrid/mail");
// sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// export default async function handler(req, res) {
//   try {
//       await sgMail.send({

//       })
//   } catch () {
      
//   }
  
//     console.log(req.body);
//   res.status(200).json({ name: "John Doe" });
// }

// const msg = {
//   to: "dericksonlossit@gmail.com", // Change to your recipient
//   from: "contato@greenmotor.ai", // Change to your verified sender
//   subject: "Sending with SendGrid is Fun",
//   text: "and easy to do anywhere, even with Node.js",
//   html: "<strong>and easy to do anywhere, even with Node.js</strong>",
// };
// sgMail
//   .send(msg)
//   .then(() => {
//     console.log("Email sent");
//   })
//   .catch((error) => {
//     console.error(error);
//   });
