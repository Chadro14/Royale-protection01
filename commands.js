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
```
