js
exports.commands = {
  menu: async (sock, from) => {
    await sock.sendMessage(from, {
      text: `🤖 *Royal Protector Bot*\n\nCommandes :\n.antispam\n.antivirus\n.antilink\n.antibann\n.owner\n.service\n\nBy Son Altesse Royal 🌹`
    });
  },

  antispam: async (sock, from) => {
    await sock.sendMessage(from, { text: '✅ Anti-spam activé.' });
  },
antivirus: async (sock, from) => {
    await sock.sendMessage(from, { text: '🛡️ Antivirus actif. Aucun virus détecté.' });
  },

  antilink: async (sock, from) => {
    await sock.sendMessage(from, { text: '🔗 Anti-liens activé.' });
  },

  antibann: async (sock, from) => {
    await sock.sendMessage(from, { text: '❌ Anti-bannissement activé.' });
  },

  owner: async (sock, from) => {
    await sock.sendMessage(from, { text: '👑 Développé par Son Altesse Royal 🌹\n📞 243905526836' });
  },

  service: async (sock, from) => {
    await sock.sendMessage(from, {
      text: `📞 Service client :\nwa.me/243905526836\nChaîne WhatsApp : https://whatsapp.com/channel/0029Vb5xgT01CYoIzsmkzj1B`
    });
  }
};
`js
const { execFile } = require('child_process');

function checkBan(username) {
  return new Promise((resolve, reject) => {
    execFile('python3', ['banChecker.py', username], (error, stdout, stderr) => {
      if (error) return reject(error);
      try {
        const result = JSON.parse(stdout);
        resolve(result.banned);
      } catch (e) {
        reject(e);
      }
    });
  });
}

async function banCommand(username) {
  try {
    const isBanned = await checkBan(username);
    if (isBanned) {
      return `❌ L'utilisateur ${username} est déjà banni.`;

else 
      // Ajouter logique pour bannir ici
      return `✅ L'utilisateur{username} est maintenant banni.`;
    }
  } catch (e) {
    return `Erreur lors de la vérification de bannissement : ${e.message}`;
  }
}

module.exports = { banCommand };

