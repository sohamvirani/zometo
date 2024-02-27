const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "sohamvirani4865@gmail.com",
    pass: "aqjxpcebkffgrxic",
  },
});

// sendmail
const send_Mail = async (to, data, subject) => {
  let maildata = `Dear Esteemed Customer,

   Welcome to foody 🍔 - your ultimate destination for culinary excellence online. 
  
  We are delighted to extend our warmest greetings as you become a valued member of our esteemed community.
  
  At foody 🍟, we pride ourselves on delivering exceptional dining experiences, offering a diverse selection of top-tier restaurants and cuisines tailored to satisfy even the most discerning palates.
  
   Prepare to embark on a culinary journey like no other!  With foody 🌭, you gain access to a world of flavors right at your fingertips. Simply navigate our intuitive app, discover exciting new dining options, and indulge in delectable dishes delivered straight to your doorstep.
  
  As a token of our appreciation, please enjoy a special discount of 60% off your first order. Use the code [WELCOME60] at checkout to avail of this exclusive offer.
  
 Once again, welcome to foody🍿! Our dedicated team is committed to ensuring your dining experiences exceed your expectations. Should you require any assistance or have inquiries, please feel free to reach out to us.
  We look forward to serving you and wish you many delightful dining moments with foody 🥪!
  
  Warm regards 😊,
  soham Virani
  Project Manager
  foody Team`
  

  let mySub = `Welcome to foody - Your Ultimate Food Delivery Destination!`;
  try {
    return transporter.sendMail({
      from: "<sohamvirani4865@gmail.com>",
      to,
      subject: mySub,
      text: maildata,
    });
  } catch (error) {
    return false;
  }
};

module.exports = {
  send_Mail,
};

