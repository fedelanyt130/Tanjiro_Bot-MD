import { xpRange } from '../lib/levelling.js';

const clockString = ms => {
  const h = Math.floor(ms / 3600000);
  const m = Math.floor(ms / 60000) % 60;
  const s = Math.floor(ms / 1000) % 60;
  return [h, m, s].map(v => v.toString().padStart(2, '0')).join(':');
};


const menuHeader = `
❒─「 *⚔TANJIRO-BOT⚔* 」─❒
❒ 👤 *Nombre:* %name
❒ ⏱️ *Uptime:* %uptime
❒ 🌍 *Usuarios:* %total

`.trim();

// Divisor de sección
const sectionDivider = '╰────────────────❒';

// Pie de página del menú
const menuFooter = `
❒─「 * INFO FINAL* 」─❒
❒ ⚔ *Usa los comandos con el prefijo correspondiente.*

> Creado por fede
╰──────────❒
`.trim();

let handler = async (m, { conn, usedPrefix: _p }) => { // Corrected parameter here
  try {
    const user = global.db?.data?.users?.[m.sender] || { level: 1, exp: 0, limit: 5 };
    const { exp, level, limit } = user;
    const { min, xp } = xpRange(level, global.multiplier || 1);
    const totalreg = Object.keys(global.db?.data?.users || {}).length;

    const mode = global.opts?.self ? 'Privado 🔒' : 'Público 🌐';
    const uptime = clockString(process.uptime() * 1000);

    let name = "Usuario";
    try {
      name = await conn.getName(m.sender);
    } catch {}

    let categorizedCommands = {};

    Object.values(global.plugins)
      .filter(p => p?.help && !p.disabled)
      .forEach(p => {
        const tags = Array.isArray(p.tags) ? p.tags : (typeof p.tags === 'string' ? [p.tags] : ['Otros']);
        const tag = tags[0] || 'Otros';
        if (!Array.isArray(p.help) && typeof p.help !== 'string') return;
        const commands = Array.isArray(p.help) ? p.help : [p.help];

        categorizedCommands[tag] = categorizedCommands[tag] || new Set();
        commands.forEach(cmd => categorizedCommands[tag].add(cmd));
      });

    const emojis = {
      anime: "💖",
      info: "ℹ️",
      search: "🔎",
      game: "🎮",
      diversión: "🎉",
      subbots: "🤖",
      rpg: "✨",
      registro: "📝",
      sticker: "🎨",
      imagen: "🖼️",
      logo: "🖌️",
      configuración: "⚙️",
      premium: "💎",
      descargas: "📥",
      herramientas: "🛠️",
      nsfw: "🔞",
      "base de datos": "📀",
      audios: "🔊",
      avanzado: "🗝️",
      "free fire": "🔥",
      otros: "🪪"
    };

    const menuBody = Object.entries(categorizedCommands).map(([title, cmds]) => {
      const cleanTitle = title.toLowerCase().trim();
      const emoji = emojis[cleanTitle] || "⚔";
      const entries = [...cmds].map(cmd => `│ ⚔ _${_p}${cmd}_`).join('\n');
      return `╭─「 ${emoji} *${title.toUpperCase()}* 」─❒\n${entries}\n${sectionDivider}`;
    }).join('\n\n');

    await conn.reply(m.chat, mensajeEspera, m, {
    contextInfo: {
      externalAdReply: {
        title: botname,
        body: "Un amor que nunca se acaba Jeje <3",
        thumbnailUrl: `https://nightapi.is-a.dev/api/mayeditor?url=https://files.catbox.moe/xl6xgg.png&texto=¡Hola%20${encodeURIComponent(name)}!%20👻✨&textodireccion=Centro&fontsize=45&color=white&fontfamily=Comic%20Sans%20MS&shadow=true&outline=black`,
        sourceUrl: redes,
        mediaType: 1,
        showAdAttribution: true,
        renderLargerThumbnail: true,
      }
    }
  })

  // Lista de videos temáticos para más variedad
  let videosHanako = [
    'https://files.catbox.moe/3l3h3e.mp4',
    // Puedes agregar más URLs de videos aquí
  ]
  let videoSeleccionado = videosHanako[Math.floor(Math.random() * videosHanako.length)]

  // Enviar menú con video
  await conn.sendMessage(m.chat, {
    video: { url: videoSeleccionado, gifPlayback: true },
    caption: menuText,
    gifPlayback: true,
    contextInfo: {
      mentionedJid: [m.sender, userId],
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
        newsletterJid: '120363392482966489@newsletter',
        newsletterName: 'fede x Tanjio',
        serverMessageId: -1,
      },
      forwardingScore: 999,
      externalAdReply: {
        title: botname,
        body: "Un amor que nunca se acaba Jeje <3",
        thumbnailUrl: banner,
        sourceUrl: redes,
        mediaType: 1,
        showAdAttribution: true,
        renderLargerThumbnail: true,
      },
    }
  }, { quoted: m })
}

handler.help = ['menu']
handler.tags = ['main']
handler.command = ['menu', 'help']

export default handler
