const config = require('./config');

const menu = () => {
    const header = `╔═══════════════════╗\n` +
                   `║   ${config.botName}   ║\n` +
                   `╚═══════════════════╝\n\n` +
                   `Voici les commandes disponibles :\n\n`;

    const commands = `🛡️ *.antiban* - Active la protection contre les bans.\n` +
                     `🦠 *.antivirus* - Surveille les fichiers suspects.\n` +
                     `🚫 *.antispam* - Bloque le spam.\n` +
                     `🚨 *.antihack* - Protège contre les attaques.\n` +
                     `➕ *.adduser* <numéro> - Ajoute un utilisateur.\n` +
                     `🟢 *.statut* - Vérifie le statut du bot.\n` +
                     `🌟 *.protection* - Affiche l'état de la protection.\n` +
                     `🔗 *.channel* - Affiche le lien de la chaîne admin.\n` +
                     `📜 *.aide* - Affiche ce menu d'aide.\n`;

    const footer = `\n\nby son Altesse`;

    return header + commands + footer;
};

module.exports = menu;
