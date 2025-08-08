

js
module.exports = {
  name: "antilink",
  description: "Bloque les liens suspects.",
  execute(client, message) {
    if (message.body.includes("http")) {
      message.reply("🚫 Lien interdit détecté !");
    }
  }
}

js
const config = require('./config');

module.exports = {
  name: 'antilink',
  execute(m, args) {
    const option = args[0];
    if (option === 'on') {
      config.setOption('antilink', true);
      return m.reply('🛡️ Antilink activé.\n\n_By Altesse 🌹_');
    } else if (option === 'off') {
      config.setOption('antilink', false);
      return m.reply('⚠️ Antilink désactivé.\n\n_By Altesse 🌹_');
    } else {
      return m.reply('Utilise `.antilink on` ou `.antilink off`\n\n_By Altesse 🌹_');
    }
  }
};
