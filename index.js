
js
const { default: makeWASocket, useSingleFileAuthState } = require('@adiwajshing/baileys');
const { Boom } = require('@hapi/boom');
const fs = require('fs');
const config = require('./config');
const { state, saveState } = useSingleFileAuthState('./session.json');

// Initialisation
const sock = makeWASocket({
  auth: state,
  printQRInTerminal: true
});
sock.ev.on('creds.update', saveState);

// Commandes actives/inactives
const commands = {
  antispam: false,
  antibann: false,
  antivirus: false,
  antilink: false,
  antihack: false
};

// Réception des messages
sock.ev.on('messages.upsert', async ({ messages }) => {
  const msg = messages[0];
  if (!msg.message || msg.key.fromMe) return;

  const sender = msg.key.remoteJid;
  const message = msg.message.conversation || msg.message.extendedTextMessage?.text || '';
  if (!message.startsWith(config.prefix)) return;

  const args = message.slice(config.prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();
  const isOwner = config.ownerNumber.includes(sender.split('@')[0]);

  const toggle = (name) => {
    
    if (!isOwner) return sock.sendMessage(sender, { text: config.messages.onlyOwner });
    commands[name] = !commands[name];
    sock.sendMessage(sender, {
      text: `✅ name est maintenant{commands[name] ? 'activé' : 'désactivé'}`
    });
  };

  switch (command) {
    case 'antispam':
    case 'antibann':
    case 'antivirus':
    case 'antilink':
    case 'antihack':
      toggle(command);
      break;

    case 'statut':
      sock.sendMessage(sender, {
        text:
          `🔒 *Statut de Royale Protection*\n\n` +
          `📌 Anti-Spam: commands.antispam ? '✅' : '❌'` +
          `📌 Anti-Bann:{commands.antibann ? '✅' : '❌'}\n` +
          `📌 Antivirus: commands.antivirus ? '✅' : '❌'` +
          `📌 Anti-Link:{commands.antilink ? '✅' : '❌'}\n` +
          `📌 Anti-Hack: ${commands.antihack ? '✅' : '❌'}\n\n` +
          `👑 Développé par Son Altesse Royale 🌹`
      });
      break;

    case 'service':
      sock.sendMessage(sender, {
        text: `📞 Service client WhatsApp : https://wa.me/243905526836\n📢 Chaîne WhatsApp : https://whatsapp.com/channel/0029Vb5xgT01CYoIzsmkzj1B`
      });
      break;

    default:
      sock.sendMessage(sender, { text: config.messages.error });
  }
});

js
const config = require('./config');
