const {
    default: makeWASocket,
    useMultiFileAuthState,
    is
} = require('@whiskeysockets/baileys');
const pino = require('pino');
const path = require('path');
const config = require('./config');
const allCommands = require('./commands');

async function connectToWhatsApp() {
    const {
        state,
        saveCreds
    } = await useMultiFileAuthState('auth_info_baileys');
    const sock = makeWASocket({
        logger: pino({
            level: 'silent'
        }),
        printQRInTerminal: true,
        auth: state
    });

    sock.ev.on('connection.update', (update) => {
        const {
            connection,
            lastDisconnect
        } = update;
        if (connection === 'close') {
            const shouldReconnect = (lastDisconnect.error)?.output?.statusCode !== 401;
            console.log('Connexion fermée. Reconnexion...', shouldReconnect);
            if (shouldReconnect) {
                connectToWhatsApp();
            }
        } else if (connection === 'open') {
            console.log('Connexion ouverte !');
        }
    });

    sock.ev.on('creds.update', saveCreds);

    sock.ev.on('messages.upsert', async (m) => {
        const msg = m.messages[0];
        if (!msg.message) return;

        const sender = msg.key.remoteJid;
        const msgText = msg.message.extendedTextMessage ? msg.message.extendedTextMessage.text : msg.message.conversation;
        
        // Vérifie si le message commence par le préfixe
        if (!msgText || !msgText.startsWith(config.prefix)) {
            return;
        }

        const args = msgText.slice(config.prefix.length).trim().split(/ +/);
        const command = args.shift().toLowerCase();

        // Obtient toutes les commandes disponibles
        const commands = allCommands(sock, m, args);

        // Exécute la commande si elle existe, sinon exécute la commande par défaut
        if (commands[command]) {
            await commands[command]();
        } else {
            await commands.default();
        }
    });
}

connectToWhatsApp();
