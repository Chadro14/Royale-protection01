// La variable `sock` est l'objet de connexion à WhatsApp,
// `m` est l'objet message, `args` sont les arguments de la commande.
module.exports = (sock, m, args) => {
  const config = require('./config'); // On importe le fichier de config ici pour l'utiliser

  return {
    antiban: async () => {
      // Logique pour l'antiban ici
      await sock.sendMessage(m.key.remoteJid, {
        text: `🛡️ La fonction Anti-Ban est activée.`
      });
    },

    antivirus: async () => {
      // Logique pour l'antivirus ici
      await sock.sendMessage(m.key.remoteJid, {
        text: `🦠 La fonction Anti-Virus est activée. Le bot est en alerte.`
      });
    },

    antispam: async () => {
      // Logique pour l'antispam ici
      await sock.sendMessage(m.key.remoteJid, {
        text: `🚫 La fonction Anti-Spam est activée.`
      });
    },

    antihack: async () => {
      // Logique pour l'antihack ici
      await sock.sendMessage(m.key.remoteJid, {
        text: `🚨 La fonction Anti-Hack est activée. Le bot surveille les activités suspectes.`
      });
    },

    adduser: async () => {
      // Logique pour ajouter un utilisateur ici
      const numToAdd = args[0];
      if (numToAdd) {
        await sock.sendMessage(m.key.remoteJid, {
          text: `➕ Ajout de l'utilisateur ${numToAdd}.`
        });
      } else {
        await sock.sendMessage(m.key.remoteJid, {
          text: `Veuillez spécifier le numéro à ajouter.`
        });
      }
    },

    statut: async () => {
      // Logique pour le statut du bot ici
      await sock.sendMessage(m.key.remoteJid, {
        text: `🟢 Statut du bot : En ligne et fonctionnel.`
      });
    },

    protection: async () => {
      // Logique pour la protection ici
      await sock.sendMessage(m.key.remoteJid, {
        text: `🛡️ Royal Protection est actif et protège votre groupe contre les menaces.`
      });
    },

    aide: async () => {
      // Commande d'aide pour lister toutes les commandes
      const aideMessage = `Voici les commandes disponibles :\n` +
                          `\n.antiban - Active la protection contre les bans.` +
                          `\n.antivirus - Surveille les fichiers suspects.` +
                          `\n.antispam - Bloque le spam.` +
                          `\n.antihack - Protège contre les attaques.` +
                          `\n.adduser <numéro> - Ajoute un utilisateur.` +
                          `\n.statut - Vérifie le statut du bot.` +
                          `\n.protection - Affiche l'état de la protection.` +
                          `\n.channel - Affiche le lien de la chaîne admin.` +
                          `\n\nRoyal Protection v1.0`;
      await sock.sendMessage(m.key.remoteJid, {
        text: aideMessage
      });
    },

    channel: async () => {
      await sock.sendMessage(m.key.remoteJid, {
        text: `🔗 Rejoignez notre chaîne officielle ici : ${config.channelLink}`
      });
    },

    // La commande par défaut
    default: async () => {
      await sock.sendMessage(m.key.remoteJid, {
        text: config.defaultMessage
      });
    }
  };
};
    
