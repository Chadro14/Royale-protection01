`js
exports.commands = {
  menu: async (sock, from) => {
    await sock.sendMessage(from, {
      text: `🤖 *Royal Protector Bot*\n\nCommandes :\n.antispam\n.antivirus\n.antilink\n.antibann\n.owner\n.service\n\nBy Son Altesse Royal 🌹`
    });
  },

  antispam: async (sock, from) => {
    await sock.sendMessage(from, { text: '✅ Anti-spam activé.' });
  },
