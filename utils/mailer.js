// utils/mailer.js

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.ADMIN_EMAIL,
    pass: process.env.ADMIN_EMAIL_PASS
  }
});

async function sendAdminOrderEmail({ name, numero, total, address }) {
  try {
    await transporter.sendMail({
      from: `"Paintello Commande" <${process.env.ADMIN_EMAIL}>`,
      to: process.env.ADMIN_EMAIL,
      subject: `🧾 Nouvelle commande confirmée`,
      text: `Une commande vient d'être envoyée sur WhatsApp :

👤 Client : ${name}
📞 Numéro : ${numero}
💰 Total : ${total} DA
📍 Adresse : ${address}

paintello.uk`
    });
    console.log("📧 Email de commande envoyé à l'admin");
  } catch (err) {
    console.error("❌ Erreur email commande:", err.message);
  }
}

async function sendClientReplyEmail({ name, numero, response }) {
  try {
    await transporter.sendMail({
      from: `"Paintello Réponse" <${process.env.ADMIN_EMAIL}>`,
      to: process.env.ADMIN_EMAIL,
      subject: `📨 Réponse du client`,
      text: `Un client a répondu au message WhatsApp :

👤 Nom : ${name}
📞 Numéro : ${numero}
💬 Réponse : ${response}

paintello.uk`
    });
    console.log("📧 Email de réponse client envoyé à l'admin");
  } catch (err) {
    console.error("❌ Erreur email réponse:", err.message);
  }
}

module.exports = {
  sendAdminOrderEmail,
  sendClientReplyEmail
};


