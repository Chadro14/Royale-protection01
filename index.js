
js
const { default: makeWASocket, useMultiFileAuthState } = require('@whiskeysockets/baileys');
const { commands } = require('./commands');
const { ADMIN_CODE, ADMIN_NUMBER, PREFIX } = require('./config');

async function startBot() {
  const { state, saveCreds } = await useMultiFileAuthState('session');
  const sock = makeWASocket({ auth: state, printQRInTerminal: true });

  sock.ev.on('creds.update', saveCreds);

  sock.ev.on('messages.upsert', async ({ messages }) => {
    const msg = messages[0];
    if (!msg.message || msg.key.fromMe) return;

    const from = msg.key.remoteJid;
    const sender = msg.key.participant || msg.key.remoteJid;
    const body = msg.message.conversation || msg.message.extendedTextMessage?.text;
    if (!body || !body.startsWith(PREFIX)) return;

    const args = body.slice(PREFIX.length).trim().split(/ +/);
    args.shift().toLowerCase();

    // Admin code check
    if (cmd === ADMIN_CODE) {
      if (sender.includes(ADMIN_NUMBER)) {
        return sock.sendMessage(from, { text: '🔐 Accès admin confirmé.' });
      } else {
        return sock.sendMessage(from, { text: '⛔ Code réservé à l\'admin.' });
      }
    }

    // Command execution
    if (commands[cmd]) {
      return commands[cmd](sock, from, sender);
    } else {
      return sock.sendMessage(from, { text: '❓Commande inconnue. Tape .menu' });
    }
  });
}

startBot();


js
const { banCommand } = require('./commands');

async function main() {
  const usernameToBan = "user123"; // exemple
  const response = await banCommand(usernameToBan);
  console.log(response);
}

main();



  
  
