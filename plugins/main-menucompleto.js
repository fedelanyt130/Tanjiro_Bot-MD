// 👻 𝙼𝚎𝚗𝚞 𝙳𝚒𝚗𝚊𝚖𝚒𝚌𝚘 𝚍𝚎 𝚂𝚘𝚢𝙼𝚊𝚢𝚌𝚘𝚕 👻
// ᵁˢᵃ ᵉˢᵗᵉ ᶜᵒᵈⁱᵍᵒ ˢⁱᵉᵐᵖʳᵉ ᶜᵒⁿ ᶜʳᵉᵈⁱᵗᵒˢ

let handler = async (m, { conn, args }) => {
  let userId = m.mentionedJid?.[0] || m.sender
  let user = global.db.data.users[userId]
  let name = conn.getName(userId)
  let _uptime = process.uptime() * 1000
  let uptime = clockString(_uptime)
  let totalreg = Object.keys(global.db.data.users).length

  // Hora actual
  let hour = new Intl.DateTimeFormat('es-PE', {
    hour: 'numeric',
    hour12: false,
    timeZone: 'America/Lima'
  }).format(new Date())
  
  // Saludos variados según la hora
  let saludos = {
    madrugada: ["🌙 Buenas madrugadas, alma nocturna...", "🌌 La noche abraza tu espíritu...", "✨ En las sombras de la madrugada..."],
    mañana: ["🌅 Buenos días, espíritu radiante~", "☀️ La luz matutina te saluda~", "🌸 Un nuevo amanecer te bendice~"],
    tarde: ["🌄 Buenas tardes, viajero astral~", "🍃 La tarde susurra tu nombre~", "🦋 Entre nubes y sueños tardíos~"],
    noche: ["🌃 Buenas noches, guardián de secretos~", "👻 La noche revela sus misterios~", "🔮 Bajo el velo de la oscuridad~"]
  }
  
  let periodoSaludo = hour < 6 ? 'madrugada' : hour < 12 ? 'mañana' : hour < 18 ? 'tarde' : 'noche'
  let saludo = saludos[periodoSaludo][Math.floor(Math.random() * saludos[periodoSaludo].length)]

  // Múltiples estilos de decoración
  let estilosMenu = [
    // Estilo 1: Clásico Hanako
    {
      header: `╭═══❖ 𝓗𝓪𝓷𝓪𝓴𝓸 𝓑𝓸𝓽 ❖═══╮`,
      userSection: `┊ ｡ﾟ☆: *.${name}.* :☆ﾟ｡\n┊ *_${saludo}_*`,
      infoTitle: `╰═══❖ 𝓘𝓷𝓯𝓸 𝓓𝓮𝓵 𝓢𝓾𝓶𝓸𝓷 ❖═══╯`,
      categoryStyle: (tag, cmds, emoji) => `
╭─━━━ ${emoji} ${tag} ${emoji} ━━━╮
${cmds.map(cmd => `┊ ➤ ${cmd}`).join('\n')}
╰─━━━━━━━━━━━━━━━━╯`,
      footer: `⋘ ──── ∗ ⋅◈⋅ ∗ ──── ⋙`
    },

    // Estilo 2: Místico
    {
      header: `✧･ﾟ: *✧･ﾟ:* 𝙷𝚊𝚗𝚊𝚔𝚘 𝙱𝚘𝚝 *:･ﾟ✧*:･ﾟ✧`,
      userSection: `◦ •●◉✿ ${name} ✿◉●• ◦\n✦ *_${saludo}_*`,
      infoTitle: `◤ ◥ ◣ ◢ 𝙸𝙽𝙵𝙾 𝙳𝙴𝙻 𝙴𝚂𝙿𝙸𝚁𝙸𝚃𝚄 ◤ ◥ ◣ ◢`,
      categoryStyle: (tag, cmds, emoji) => `
⟬ ${emoji} ${tag} ${emoji} ⟭
${cmds.map(cmd => `◦ ${cmd}`).join('\n')}
﹌﹌﹌﹌﹌﹌﹌﹌`,
      footer: `✧ ─═══════════════─ ✧`
    },

    // Estilo 3: Kawaii
    {
      header: `♡⸜(˶˃ ᵕ ˂˶)⸝♡ 𝙷𝚊𝚗𝚊𝚔𝚘 𝙱𝚘𝚝 ♡⸜(˶˃ ᵕ ˂˶)⸝♡`,
      userSection: `૮ ˶ᵔ ᵕ ᵔ˶ ა ${name} ♡\n*_${saludo}_* (⁠◍⁠•⁠ᴗ⁠•⁠◍⁠)`,
      infoTitle: `꒰ ♡ 𝙸𝙽𝙵𝙾 𝙳𝙴 𝙽𝚄𝙴𝚂𝚃𝚁𝙾 𝙰𝙼𝙾𝚁 ♡ ꒱`,
      categoryStyle: (tag, cmds, emoji) => `
╭─ ${emoji} ${tag} ${emoji} ─╮
${cmds.map(cmd => `│ ♡ ${cmd}`).join('\n')}
╰─────────────╯`,
      footer: `♡ ∩───∩ ♡ ∩───∩ ♡`
    },

    // Estilo 4: Gótico Elegante
    {
      header: `▁ ▂ ▄ ▅ ▆ ▇ █ 𝙷𝚊𝚗𝚊𝚔𝚘 𝙱𝚘𝚝 █ ▇ ▆ ▅ ▄ ▂ ▁`,
      userSection: `⌈ ${name} ⌉\n⟨ *_${saludo}_* ⟩`,
      infoTitle: `▰▱▰▱ 𝙸𝙽𝙵𝙾 𝙴𝚂𝙿𝙸𝚁𝙸𝚃𝚄𝙰𝙻 ▰▱▰▱`,
      categoryStyle: (tag, cmds, emoji) => `
▲ ${tag} ${emoji} ▲
${cmds.map(cmd => `▸ ${cmd}`).join('\n')}
▼▼▼▼▼▼▼▼▼▼`,
      footer: `━━━━━━━━━━━━━━━━━━━━━━━━━`
    },

    // Estilo 5: Dreamy
    {
      header: `･ﾟ✧*:･ﾟ✧ 𝚂𝚞𝚖𝚘𝚗 𝙷𝚊𝚗𝚊𝚔𝚘 ✧･ﾟ: *✧･ﾟ`,
      userSection: `☾ ⋆*･ﾟ ${name} ･ﾟ*⋆ ☽\n～ *_${saludo}_* ～`,
      infoTitle: `⋆｡‧˚ʚ 𝙸𝙽𝙵𝙾 𝙼Á𝙶𝙸𝙲𝙰 ɞ˚‧｡⋆`,
      categoryStyle: (tag, cmds, emoji) => `
⊹ ࣪ ˖ ${emoji} ${tag} ${emoji} ˖ ࣪ ⊹
${cmds.map(cmd => `✦ ${cmd}`).join('\n')}
˚ ༘♡ ⋆｡˚ ❀ ˚ ༘♡ ⋆｡˚`,
      footer: `ੈ✩‧₊˚ ੈ✩‧₊˚ ੈ✩‧₊˚`
    }
  ]

  // Seleccionar estilo aleatorio
  let estiloSeleccionado = estilosMenu[Math.floor(Math.random() * estilosMenu.length)]

  // Agrupar comandos por categorías
  let categories = {}
  for (let plugin of Object.values(global.plugins)) {
    if (!plugin.help || !plugin.tags) continue
    for (let tag of plugin.tags) {
      if (!categories[tag]) categories[tag] = []
      categories[tag].push(...plugin.help.map(cmd => `#${cmd}`))
    }
  }

  // Emojis temáticos variados
  let emojiSets = [
    ['✨', '🌸', '👻', '⭐', '🔮'],
    ['💫', '☁️', '🦋', '🪄', '🌙'],
    ['🎭', '🕯️', '📿', '🗝️', '🔱'],
    ['🌺', '🎪', '🎨', '🎭', '🎪'],
    ['🔥', '💎', '⚡', '🌊', '🍃']
  ]
  let emojiSet = emojiSets[Math.floor(Math.random() * emojiSets.length)]
  let emojiRandom = () => emojiSet[Math.floor(Math.random() * emojiSet.length)]

  // Mensajes de espera variados
  let mensajesEspera = [
    '⌜ ⊹ Espera tantito, espíritu curioso... ⊹ ⌟',
    '✦ Invocando el menú mágico... ✦',
    '🌸 Preparando algo especial para ti... 🌸',
    '👻 Los espíritus están organizando todo... 👻',
    '✨ Un momento, creando magia... ✨'
  ]

  // CONSTRUCCIÓN DEL MENÚ DINÁMICO
  let menuText = `
${estiloSeleccionado.header}

${estiloSeleccionado.userSection}

${estiloSeleccionado.infoTitle}

💻 Sistema: Multi-Device
👤 Espíritu: @${userId.split('@')[0]}
⏰ Tiempo activo: ${uptime}
👥 Espíritus: ${totalreg} espíritus
⌚ Hora: ${hour}

${estiloSeleccionado.footer}

> Hecho con amor por: *_SoyMaycol_* (⁠◍⁠•⁠ᴗ⁠•⁠◍⁠)⁠❤
`.trim()

  // Añadir categorías con el estilo seleccionado
  let categoriesEntries = Object.entries(categories)
  // Mezclar aleatoriamente las categorías para más dinamismo
  categoriesEntries.sort(() => Math.random() - 0.5)

  for (let [tag, cmds] of categoriesEntries) {
    let tagName = tag.toUpperCase().replace(/_/g, ' ')
    let emoji = emojiRandom()
    menuText += estiloSeleccionado.categoryStyle(tagName, cmds, emoji)
  }

  // Mensaje previo aleatorio
  let mensajeEspera = mensajesEspera[Math.floor(Math.random() * mensajesEspera.length)]
  
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
    'https://files.catbox.moe/i74z9e.mp4',
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
        newsletterJid: '120363372883715167@newsletter',
        newsletterName: 'SoyMaycol <3',
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

handler.help = ['menucompleto']
handler.tags = ['main']
handler.command = ['menucompleto']

export default handler

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  return `${h}h ${m}m ${s}s`
    }
