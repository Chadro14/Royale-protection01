module.exports = (sock, m, args) => {
  return {
    shutdown: async () => {
      await sock.sendMessage(m.key.remoteJid, {
        text: "🔴 Arrêt du bot. Au revoir !",
      });
      process.exit(0); // Commande pour arrêter le processus du bot
    },
    broadcast: async () => {
      // Logique pour envoyer un message à toutes les conversations
      const message = args.join(" ");
      if (message) {
        await sock.sendMessage(m.key.remoteJid, {
          text: `📢 Diffusion en cours : ${message}`,
        });
      } else {
        await sock.sendMessage(m.key.remoteJid, {
          text: "Veuillez taper le message à diffuser.",
        });
      }
    },
    // Ajoutez d'autres commandes du propriétaire ici, comme changer le statut du bot
  };
};
